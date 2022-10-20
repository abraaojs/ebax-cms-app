import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.scss'
import 'uno.css'

import Layout from '../components/pages/Layout'

export { PageShell }

function PageShell({
  children,
  pageContext
}: {
  children: React.ReactNode
  pageContext: PageContext
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout props={pageContext.pageProps}>{children}</Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}
