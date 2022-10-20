import React from 'react'
import ButtonFilled from '../../atomics/ButtonFilled'
import Container from './Container'
import PartnersLogos from './PartnersLogos'
import PartnersTitle from './PartnersTitle'
import CardArea from './CardArea'
import Subtitle from './Subtitle'
import Title from './Title'
import ButtonArea from './ButtonArea'
import Image from './Image'
import SupportText from './SupportText'
import { ButtonClearProps } from '../../atomics/ButtonClear'

type ILogoProps = {
  filename?: string
  alt?: string
  id?: string
}


type Section66 = {
  title_text: string
  subtitle_text: string
  support_text: string
  background_color?: any
  image: {
    filename: string
  },
  button_area: ButtonClearProps[]
  partners_title: string
  partners_logos: ILogoProps[]
  card_area: any[]
}

const Section66 = ({ blok }: { blok: Section66 }) => {
  return (
    <Container background_color={blok.background_color}>
      <div className="flex flex-col">
        <div className="md:flex justify-center gap-6 mb-md">
          <div className="flex-1">
            <Title title={blok.title_text} />
            <Subtitle subtitle_text={blok.subtitle_text} />
          </div>

          <div className="flex-1">
            <div className="flex justify-center md:max-h-[500px]">
              <Image image={blok.image} />
            </div>
          </div>
        </div>

        <CardArea card_area={blok.card_area} background_color={blok.background_color} />
        <SupportText support_text={blok.support_text} />
        <PartnersTitle partners_title={blok.partners_title} />
        <PartnersLogos partners_logos={blok.partners_logos} />

        <ButtonArea button_area={blok.button_area} />
      </div>
    </Container>
  )
}

export default Section66
