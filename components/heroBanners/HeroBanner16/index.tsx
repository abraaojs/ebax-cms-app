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
import ButtonArea from './ButtonArea'

type ILogoProps = {
  filename?: string
  alt?: string
  id?: string
}

type HeroBanner16Props = {
  zIndex: number,
  page_title: string,
  title_text: string,
  subtitle_text: string,
  image: {
    filename: string,
  },
  image_position: string,
  card_text: string,
  card_area: any[],
  partners_text: string
  partners_logos: ILogoProps[]
  button_area: ButtonFilledProps[]
}

const HeroBanner16 = ({ blok }: { blok: HeroBanner16Props }) => {
  return (
    <Container>
      <div className="flex flex-col items-start md:items-center gap-lg">
        <Title title_text={blok.title_text} />
        <Subtitle subtitle_text={blok.subtitle_text} />
      </div>
      <ImageBackground backgroundImage={blok.image.filename} backgroundPosition={blok.image_position} />
      <CardText card_text={blok.card_text} />
      <div className="gap-3 md:gap-6 mt-lg">
        <CardArea
          card_area={blok.card_area}
        />
      </div>
      <PartnersText partners_text={blok.partners_text} />
      <PartnersLogos partners_logos={blok.partners_logos} />
      <ButtonArea button_area={blok.button_area} />
    </Container>
  )
}

export default HeroBanner16
