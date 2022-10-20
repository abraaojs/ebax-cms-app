import React from 'react'
import Tag from '../../atomics/Tag'
import Container from './Container'
import Title from './Title'
import Subtitle from './Subtitle'
import PixText from './PixText'
import TagArea from './TagArea'
import AdviceText from './AdviceText'

type typeSection45 = {
  zIndex: number
  title_text: string
  subtitle_text: string
  pix_text: string
  tag_area: any
  advice_text: string
  background_color: string
  text_color: string
  tag_background_color: string
  title_font_topol: boolean
  tag_text_color: string
}

const Section45 = ({ blok }: { blok: typeSection45 }) => (
  <Container zIndex={blok.zIndex} background_color={blok.background_color} text_color={blok.text_color}>
    <Title title_text={blok.title_text} title_font_topol={blok.title_font_topol} />
    <Subtitle title_text={blok.subtitle_text} />
    <PixText pix_text={blok.pix_text} />
    <TagArea tag_text_color={blok.tag_text_color} tag_area={blok.tag_area} tag_background_color={blok.tag_background_color} />
    <AdviceText advice_text={blok.advice_text} />
  </Container>
)

export default Section45
