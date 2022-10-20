import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
// import logoUrl from '/assets/logo.svg'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps }: { Page: any; pageProps: any } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head
  const story = pageProps.story
  const title = (story && story?.content?.title) || 'EBANX | Website'
  const desc =
    (story && story?.content?.description) ||
    'EBANX Payments help global merchants grow exponentially and increase revenue in Latin America.'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <link rel="shortcut icon" href="/favicon.svg">
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
        <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js?pre=1"></script>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}

import { getStoryblokApi, storyblokInit, apiPlugin } from '@storyblok/react'
import components from '../storyBlok.config'
import { isStaticRouteString } from 'vite-plugin-ssr/dist/cjs/shared/route'

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_KEY,
  use: [apiPlugin],
  components
})

const getStory = async (slug: string) => {
  const storyblokApi = getStoryblokApi()
  const sbParams = {
    version: 'draft' // or 'published'
  }
  const {
    data: { story }
  } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

  return story
}

const getDataSource = async (name: string) => {
  const storyblokApi = getStoryblokApi()
  const sbParams = {
    version: import.meta.env.VITE_STORYBLOK_VERSION,
  }
  const {
    data: { datasource_entries }
  } = await storyblokApi.get(`cdn/datasource_entries?datasource=${name}`, sbParams)
  return datasource_entries
}

const resolveRelations = async (data: any) => {
  let relsDictionary: any = [];
  data.rels.forEach((item: any) => {
    relsDictionary[item.uuid] = item;
  });
  data.stories.forEach((story: any, ei: any) => {
    if (story.content.countries) {
      story.content.countries.forEach(function (country: any, countryIndex: any) {
        const countryFound = relsDictionary[country];
        if (countryFound.content.payment_group) {
          countryFound.content.payment_group.forEach((paymentGroup: any, paymentGroupIndex: any) => {

            const paymentCategoryFound = relsDictionary[paymentGroup.payment_category];
            countryFound.content.payment_group[paymentGroupIndex].payment_category = paymentCategoryFound;


            paymentGroup.payment_methods.forEach((paymentMethod: any, paymentMethodIndex: any) => {
              const paymentMethodFound = relsDictionary[paymentMethod]
              countryFound.content.payment_group[paymentGroupIndex].payment_methods[paymentMethodIndex] = paymentMethodFound;

            })
          })
        }

        story.content.countries[countryIndex] = countryFound;
      })
    }
  })
  return data;
}

const getPaymentsDataSource = async (payments_data_source: any) => {
  const storyblokApi = getStoryblokApi()
  const sbParams = {
    version: import.meta.env.VITE_STORYBLOK_VERSION,
    resolve_relations: 'countries'
  }
  let {
    data
  } = await storyblokApi.get(`cdn/stories?by_uuids=${payments_data_source.join()}`, sbParams)
  const paymentMethod = await storyblokApi.get(`cdn/stories?by_slugs=*custom-data/payment-method/*`, {
    version: import.meta.env.VITE_STORYBLOK_VERSION,
    per_page: 100,
  })
  const paymentCategory = await storyblokApi.get(`cdn/stories?by_slugs=*custom-data/payment-category/*`, {
    version: import.meta.env.VITE_STORYBLOK_VERSION,
    per_page: 100,
  })
  paymentCategory.data.stories.forEach((paymentCategory: any) => {
    data.rels.push(paymentCategory)
  })
  paymentMethod.data.stories.forEach((paymentMethod: any) => {
    data.rels.push(paymentMethod)
  })
  data = await resolveRelations(data);
  return data.stories;
}

async function onBeforeRender(pageContext: any) {
  const { urlPathname } = pageContext
  const pageProps: any = {}
  let url: string = '';
  let language: string = '';
  urlPathname.split("/").map((value: string, index: number) => {
    if (index > 1) {
      url = url + '/' + value
    }
    if (index == 1) {
      language = value;
    }
  });
  try {
    pageProps.story = await getStory(language + '/website/' + url)
  } catch (error) { }
  try {
    pageProps.footer = await getStory(language + '/layout/footer')
  } catch (error) { }
  try {
    pageProps.nav_bar = await getStory(language + '/layout/nav-bar')
  } catch (error) { }
  const tag_payment_methods = await getDataSource('payment-category-options')
  const tag_events = await getDataSource('tag-events')
  const tag_countries = await getDataSource('flags')
  const tag_events_color = await getDataSource('tag-events-color')

  for (let i in pageProps.story?.content?.body) {
    pageProps.story.content.body[i].tag_payment_methods = tag_payment_methods
    pageProps.story.content.body[i].tag_events = tag_events
    pageProps.story.content.body[i].tag_countries = tag_countries
    pageProps.story.content.body[i].tag_events_color = tag_events_color

    if (pageProps.story.content.body[i].payments_data_source) {
      pageProps.story.content.body[i].payments_data_source = await getPaymentsDataSource(pageProps.story.content.body[i].payments_data_source)
    }
  }

  return {
    pageContext: {
      pageProps
    }
  }
}

export { onBeforeRender }
