import React from 'react'
import ButtonFilled from '../../atomics/ButtonFilled'
import Container from './Container'
import Subtitle from './Subtitle'
import Title from './Title'
import ButtonArea from './ButtonArea'
import Image from './Image'
import Breadcrumb from './Breadcrumb'
import Title1 from './Title1'
import CardArea from './CardArea'

type HeroBanner11 = {
  title_text: string
  subtitle_text: string
  support_text?: string
}

const HeroBanner11 = ({ blok }: { blok: any }) => {
  return (
    <Container>
      <div className="flex flex-col gap-7">
        <div className="md:flex justify-center">
          <div className="flex-1 md:mr-md">
            <Breadcrumb breadcrumb={blok.breadcrumb_area} />
            <Title title={blok.title_text} />
            <Subtitle subtitle_text={blok.subtitle_text} />
          </div>
          <div className="flex-1">
            <div className="flex justify-center md:max-h-[500px]">
              <Image image={blok.image} />
            </div>
          </div>
        </div>

        <Title1 title_1={blok.title_1} />
        <CardArea card_area={blok.card_area} />
        <ButtonArea button_area={blok.button_area} />
      </div>
    </Container>
  )
}

export default HeroBanner11
