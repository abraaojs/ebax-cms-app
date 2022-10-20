import React from 'react'
import { ButtonFilledProps } from '../../atomics/ButtonFilled'
import { TextCardProps } from '../../atomics/TextCard'
import ButtonArea from './ButtonArea'
import CardArea from './CardArea'
import Container from './Container'
import ImageBackground from './ImageBackground'
import Subtitle from './Subtitle'
import Title from './Title'
import Title1 from './Title1'

type typeSection44 = {
  zIndex: number,
  title_text: string,
  subtitle_text: string,
  title1_text: string,
  image: {
    filename: string,
  },
  image_position: string,
  card_area: TextCardProps[],
  button_area: ButtonFilledProps[],
  title_text_color: string,
  bold_title_color: string,
  title_text_topol: boolean,
  subtitle_color: string,
  title_text_1_color: string,
  background_color: string,
}

/**
 * Render section-44 component.
 * @see {@link https://www.figma.com/file/1kVGH77Cj6xgtOi3HcIq05/EBANX-%7C-Foundation?node-id=1937%3A10521} for the Figma reference.
 * @see {@linkcode https://github.com/GaugeBrasil/ebax-cms/blob/main/theme.config.ts} for the theme configuration reference.
 * @return {ReactElement}      The Section44 element
 */
const Section44 = ({ blok }: { blok: typeSection44 }) => (
  <Container zIndex={blok.zIndex} background_color={blok.background_color}>
    <div className="flex flex-col gap-lg items-start md:items-center">
      <Title title_text={blok.title_text} title_text_color={blok.title_text_color} bold_title_color={blok.bold_title_color} title_text_topol={blok.title_text_topol} />
      <Subtitle subtitle_text={blok.subtitle_text} subtitle_color={blok.subtitle_color} />
    </div>
    <ImageBackground backgroundImage={blok.image.filename} backgroundPosition={blok.image_position} />
    <Title1 title_1={blok.title1_text} title_1_text_color={blok.title_text_1_color} />
    <CardArea card_area={blok.card_area} card_color={blok.title_text_1_color} />
    <ButtonArea button_area={blok.button_area} />
  </Container>
)

export default Section44
