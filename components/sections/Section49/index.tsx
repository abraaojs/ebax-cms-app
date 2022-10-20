import React from 'react'
import { getValue } from '../../../hooks/utils'
import ButtonArea from './ButtonArea'
import CardArea from './CardArea'
import Container from "../../atomics/Container"

const Section49 = ({ blok }: { blok: any }) => {
  const backgroundColor = getValue(blok, 'background_color')
  const sectionBackground = {
    light: 'bg-base',
    medium: 'bg-base-1',
    dark: 'bg-base-2'
  }

  return (
    <section
      className={`section_49 text-content-light -mb-sct pt-sct relative rounded-b-sct bg-base ${backgroundColor(
        sectionBackground
      )}`}
      style={{ zIndex: -blok.zIndex }}
    >
      <Container paddingX='px-lg md:px-5xl'>
        <div className="py-5xl md:py-9xl">
          <div className="gap-3 md:gap-6">
            <CardArea
              card_area={blok.card_area}
              backgroundColor={backgroundColor}
            />
          </div>
          <ButtonArea button_area={blok.button_area} />
        </div>
      </Container>
    </section>
  )
}

export default Section49
