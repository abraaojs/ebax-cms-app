import React from 'react'
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

export { Page }
