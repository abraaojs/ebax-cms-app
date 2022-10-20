import React from 'react'
import Tag from '../../atomics/Tag'
import Container from './Container'
import Title from './Title'
import Subtitle from './Subtitle'
import CardArea from './CardArea'
import { TypeEventCard } from '../../atomics/EventCard1'
import PartnersTitle from './PartnersTitle'
import PartnersLogos from './PartnersLogos'
import { ButtonFilledProps } from '../../atomics/ButtonFilled'
import Subtitle2 from './Subtitle2'
import SupportText from './SupportText'
import ButtonArea from './ButtonArea'

type ILogoProps = {
  filename?: string
  alt?: string
  id?: string
}

type typeSection68 = {
  zIndex: number
  title_text: string
  subtitle_text: string
  subtitle_text_2: string
  support_text: string
  card_area: TypeEventCard[]
  partners_title: string
  partners_logos: ILogoProps[]
  button_area: ButtonFilledProps[]
}

const Section68 = ({ blok }: { blok: typeSection68 }) => (
  <Container zIndex={blok.zIndex}>
    <Title title_text={blok.title_text} />
    <Subtitle subtitle_text={blok.subtitle_text} />
    <Subtitle2 subtitle_text_2={blok.subtitle_text_2} />
    <CardArea card_area={blok.card_area} />
    <SupportText support_text={blok.support_text} />
    <PartnersTitle partners_title={blok.partners_title} />
    <PartnersLogos partners_logos={blok.partners_logos} />
    <ButtonArea button_area={blok.button_area} />
  </Container>
)

export default Section68
