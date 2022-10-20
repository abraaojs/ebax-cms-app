import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import ButtonFilled, { ButtonFilledProps } from '../../atomics/ButtonFilled'
import TextCard, { TextCardProps } from '../../atomics/TextCard'
import ButtonArea from './ButtonArea'
import CardArea from './CardArea'
import Container from './Container'
import CountryType from './CountryType'
import ImageBackground from './ImageBackground'
import Subtitle from './Subtitle'
import SupportText from './SupportText'
import Title from './Title'
import Title1 from './Title1'

type typeSection59 = {
  zIndex: number,
  title_text: string,
  subtitle_text: string,
  title_1: string,
  support_text: string,
  country_type: string,
  image: {
    filename: string,
  },
  image_position: string,
  card_area: TextCardProps[],
  button_area: ButtonFilledProps[],
  background_color: string,
}

const Section59 = ({ blok }: { blok: typeSection59 }) => (
  <Container zIndex={blok.zIndex} backgroundColor={blok.background_color}>
    <div className="flex flex-col gap-lg items-start md:items-center">
      <CountryType country_type={blok.country_type} />
      <Title title_text={blok.title_text} />
      <Subtitle subtitle_text={blok.subtitle_text} />
    </div>
    <ImageBackground backgroundImage={blok.image.filename} backgroundPosition={blok.image_position} />
    <Title1 title_1={blok.title_1} />
    <CardArea card_area={blok.card_area} />
    <SupportText support_text={blok.support_text} />
    <ButtonArea button_area={blok.button_area} />
  </Container>
)

export default Section59
