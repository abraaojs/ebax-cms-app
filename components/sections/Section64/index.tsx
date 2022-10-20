import React from 'react'
import { getValue } from '../../../hooks/utils'
import { ButtonFilledProps } from '../../atomics/ButtonFilled'
import { TypeEventCard } from '../../atomics/EventCard1'
import ButtonArea from './ButtonArea'
import CardArea from './CardArea'
import CardText from './CardText'
import Container from './Container'
import Image1 from './Image1'
import Image2 from './Image2'
import Subtitle from './Subtitle'
import SupportText from './SupportText'
import Title from './Title'

type Section64Props = {
  zIndex: number,
  background_color: string
  image_1: {
    filename: string
  }
  image_2: {
    filename: string
  }
  title_text: string
  subtitle_text: string
  support_text: string
  card_text: string
  card_area: TypeEventCard[]
  button_area: ButtonFilledProps[]
  title_icon: string
}

const Section64 = ({ blok }: { blok: Section64Props }) => {
  return (
    <Container zIndex={blok.zIndex} backgroundColor={blok.background_color}>
      <div className="md:flex justify-center">
        <div className="flex-1">
          <div className="flex gap-3 items-center mb-lg">
            {blok.title_icon && (
              <img
                className={`w-[34px] md:w-[60px] max-h-100%`}
                src={`/icons/${blok.title_icon}.svg`}
                alt={blok.title_icon}
              />
            )}
            <Title title={blok.title_text} />
          </div>

          <Subtitle subtitle_text={blok.subtitle_text} />
          <SupportText support_text={blok.support_text} />
        </div>

        <div className="flex-1">
          <div className="flex mt-2xl md:mt-0 gap-md justify-center md:justify-end">
            <Image1 image_1={blok.image_1} />
            <Image2 image_2={blok.image_2} />
          </div>
        </div>
      </div>
      <CardText card_text={blok.card_text} />
      <CardArea
        card_area={blok.card_area}
        backgroundColor={blok.background_color}
      />
      <ButtonArea button_area={blok.button_area} />

    </Container>
  )
}

export default Section64
