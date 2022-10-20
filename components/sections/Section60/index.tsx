import React from 'react'
import HorizontalCard from '../../atomics/HorizontalCard'
import ButtonFilled, { ButtonFilledProps } from '../../atomics/ButtonFilled'
import Container from './Container'
import Title from './Title'
import Subtitle from './Subtitle'
import SupportText from './SupportText'
import ButtonArea from './ButtonArea'
import CardArea from './CardArea'

type Section60Props = {
  zIndex: number,
  title_text: string,
  subtitle_text: string,
  support_text: string,
  button_area: ButtonFilledProps[],
  card_area: any[],
  background_color_card: string,
}

const Section60 = ({ blok }: { blok: Section60Props }) => {
  return (
    <Container zIndex={blok.zIndex}>
      <div className="flex flex-col gap-lg">
        <Title title_text={blok.title_text} />
        <Subtitle subtitle_text={blok.subtitle_text} />
        <SupportText support_text={blok.support_text} />
        <ButtonArea button_area={blok.button_area} className="button_area hidden md:flex" />
      </div>
      <CardArea card_area={blok.card_area} className={blok.background_color_card} />
      <ButtonArea button_area={blok.button_area} className="button_area flex md:hidden" />
    </Container>
  )
}

export default Section60
