import React from 'react'
import Container from './Container'
import Subtitle from './Subtitle'
import Support from './Support'
import Title from './Title'

type HeroBanner10 = {
  title_text: string,
  subtitle_text: string,
  support_text?: string,
  background_color: string,
  text_color: string
  border_bottom_color: string
}

const HeroBanner10 = ({ blok }: { blok: any }) => {
  return (
    <Container background_color={blok.background_color} border_bottom_color={blok.border_bottom_color} text_color={blok.text_color}>
      <Title title={blok.title_text} />
      <div className="flex flex-col gap-7">
        <Subtitle subtitle_text={blok.subtitle_text} />
        {blok.support_text && (
          <Support support_text={blok.support_text} />
        )}
      </div>
    </Container>
  )
}

export default HeroBanner10
