import React from 'react'
import Container from './Container'
import Title from './Title'
import ButtonArea from './ButtonArea'
import { ButtonFilledProps } from '../../atomics/ButtonFilled'
import CardArea from './CardArea'

type typeSection39 = {
  zIndex: number
  title_text: string
  card_area: any[]
  button_area: ButtonFilledProps[]
}

const Section39 = ({ blok }: { blok: typeSection39 }) => (
  <Container zIndex={blok.zIndex}>
    <Title title_text={blok.title_text} />
    <CardArea card_area={blok.card_area} />
    <ButtonArea button_area={blok.button_area} />
  </Container>
)

export default Section39
