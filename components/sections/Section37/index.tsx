import React from 'react'
import CardArea from './CardArea'
import Container from './Container'
import Title from './Title'

type Section37 = {
  zIndex: number,
  title_text: string,
  card_area: any,
  background_color: string,
  title_color: string,
  card_background_color: string,
  card_text_color: string,
}

const Section37 = ({ blok }: { blok: any }) => (
  <Container zIndex={blok.zIndex} background_color={blok.background_color} title_color={blok.title_color}>
    <Title title_text={blok.title_text} />
    <CardArea card_background_color={blok.card_background_color} card_text_color={blok.card_text_color} card_area={blok.card_area} />
  </Container>
)

export default Section37
