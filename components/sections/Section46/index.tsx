import React from 'react'
import Container from './Container'
import Title from './Title'
import Subtitle from './Subtitle'
import PixText from './PixText'
import AdviceText from './AdviceText'
import CarouselPointer from '../../atomics/CarouselPointer'
import ButtonArea from './ButtonArea'

type typeSection46 = {
  zIndex: number
  title_text: string
  pix_text: string
  subtitle_text: string
  advice_text: string
  card_carousel: {
    slider_cards: object[],
  }[],
  button_area: any
  background_color: string
  text_color: string
}

const Section46 = ({ blok }: { blok: typeSection46 }) => (
  <Container zIndex={blok.zIndex} background_color={blok.background_color} text_color={blok.text_color}>
    <Title title_text={blok.title_text} />
    <PixText pix_text={blok.pix_text} />
    <Subtitle title_text={blok.subtitle_text} />
    <AdviceText advice_text={blok.advice_text} />
    <CarouselPointer paddingLeft="" className='blue-swiper' card_carousel={blok.card_carousel[0]} />
    <ButtonArea button_area={blok.button_area} />
  </Container>
)

export default Section46
