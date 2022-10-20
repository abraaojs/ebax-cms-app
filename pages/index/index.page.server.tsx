import React from 'react'
import axios from 'axios'
import { StoryblokComponent } from '@storyblok/react'

function Page(pageProps: { story: any }) {
  const { story } = pageProps
  return (
    <main className="overflow-hidden">
      {story.content?.body?.map((nestedBlok: any, i: number) => (
        <StoryblokComponent
          blok={{ ...nestedBlok, zIndex: i }}
          key={nestedBlok._uid}
        />
      ))}
    </main>
  )
}

async function prerender() {
  const url =
    'https://api.storyblok.com/v2/cdn/links?starts_with=website%2F&token='
  const resp = await axios.get(url + import.meta.env.VITE_STORYBLOK_KEY)
  const { data: { links = '' } = {} }: any = resp

  const ambientMode = process.env.AMBIENT_ENV
  console.log('AMBIENT_MODE: ', ambientMode)

  const urls = Object.values(links)
    .map(({ slug, published }: any) => ({
      slug,
      published
    }))
    .filter((url) => {
      if (ambientMode === 'homolog') return url
      if (ambientMode === 'production') return url.published
      if (ambientMode === 'preview' && url.slug === 'website/') return url
    })
    .map(({ slug }) => slug.replace('website', ''))

  console.log(urls)

  return urls
}

export { Page, prerender }
