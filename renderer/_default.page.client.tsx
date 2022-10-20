import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContext } from './types'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import components from '../storyBlok.config'

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_KEY,
  use: [apiPlugin],
  components
})

function render(pageContext: PageContextBuiltInClient & PageContext) {
  const { Page, pageProps } = pageContext

  hydrateRoot(
    document.getElementById('page-view')!,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}

export { render }

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
