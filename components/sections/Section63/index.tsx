import React from 'react'
import ButtonFilled, { ButtonFilledProps } from '../../atomics/ButtonFilled'
import Container from './Container'
import Title from './Title'
import Subtitle from './Subtitle'
import PageTitle from './PageTitle'
import ImageBackground from './ImageBackground'
import PartnersText from './PartnersText'
import PartnersLogos from './PartnersLogos'
import CardArea from './CardArea'
import CardText from './CardText'

type ILogoProps = {
  filename?: string
  alt?: string
  id?: string
}

type TitleProps = {
  text: string,
  text_color: string,
  font_family_topol: boolean,
  bold_color: string,
}

type Section63Props = {
  background_color: string,
  text_color: string,
  zIndex: number,
  page_title: string,
  title_text_1: TitleProps[],
  subtitle_text: string,
  image: {
    filename: string,
  },
  image_position: string,
  cards_text: string,
  max_card_col: number,
  card_area: any[],
  partners_text: string
  partners_logos: ILogoProps[]
}

const Section63 = ({ blok }: { blok: Section63Props }) => {
  return (
    <Container zIndex={blok.zIndex} background_color={blok.background_color} text_color={blok.text_color}>
      <div className="flex flex-col items-start md:items-center gap-lg">
        <PageTitle page_title={blok.page_title} />
        <Title title={blok.title_text_1[0]} />
        <Subtitle subtitle_text={blok.subtitle_text} />
      </div>
      <ImageBackground backgroundImage={blok.image.filename} backgroundPosition={blok.image_position} />
      <CardText card_text={blok.cards_text} />
      <div className="gap-3 md:gap-6 my-lg">
        <CardArea
          card_area={blok.card_area}
          max_card_col={blok.max_card_col}
        />
      </div>
      <PartnersText partners_text={blok.partners_text} />
      <PartnersLogos partners_logos={blok.partners_logos} />

    </Container>
  )
}

export default Section63
