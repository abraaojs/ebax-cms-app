import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import ImageCard from '../../atomics/ImageCard'
import TextCard from '../../atomics/TextCard'
import CardArea from './CardArea'
import Container from './Container'
import Title from './Title'

type typeSection47 = {
  zIndex: number
  title_text: string
  card_area: any
  background_color: string
  title_color: string
  title_font_topol: boolean
}

const Section47 = ({ blok }: { blok: typeSection47 }) => (
  <Container zIndex={blok.zIndex} background_color={blok.background_color}>
    <Title title_text={blok.title_text} title_color={blok.title_color} title_font_topol={blok.title_font_topol} />
    <CardArea card_area={blok.card_area} />
  </Container>
)

export default Section47
