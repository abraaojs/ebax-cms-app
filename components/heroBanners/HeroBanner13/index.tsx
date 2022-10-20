import React from 'react'
import ButtonFilled from '../../atomics/ButtonFilled'
import Container from './Container'
import PartnersLogos from './PartnersLogos'
import PartnersTitle from './PartnersTitle'
import Cards from './Cards'
import Subtitle from './Subtitle'
import Title from './Title'
import ButtonArea from './ButtonArea'
import Image1 from './Image1'
import Image2 from './Image2'
import Breadcrumb from './Breadcrumb'

type HeroBanner13 = {
  title_text: string
  subtitle_text: string
  support_text?: string
  max_card_col: number
}

const HeroBanner13 = ({ blok }: { blok: any }) => {
  return (
    <Container background_color={blok.background_color}>
      <div className="flex flex-col gap-7">
        <div className="md:flex justify-center">
          <div className="flex-1 md:mr-md">
            <Breadcrumb breadcrumb={blok.breadcrumb} />
            <Title title={blok.title_text[0].title} title_color={blok.title_text[0].title_color} />
            <Subtitle
              subtitle_text={blok.subtitle_text[0].text}
              text_color={blok.subtitle_text[0].text_color}
              font_family_topol={blok.subtitle_text[0].font_family_topol}
              bold_color={blok.subtitle_text[0].bold_color}
            />
          </div>

          <div className="flex-1">
            <div className="flex justify-center md:max-h-[500px]">
              <Image1 image_1={blok.image_1} />
              <Image2 image_2={blok.image_2} />
            </div>
          </div>
        </div>

        <Cards cards={blok.cards} max_card_col={blok.max_card_col} />
        <PartnersTitle partners_title={blok.partners_title} />
        <PartnersLogos partners_logos={blok.partners_logos} />

        <ButtonArea button_area={blok.button_area} />
      </div>
    </Container>
  )
}

export default HeroBanner13
