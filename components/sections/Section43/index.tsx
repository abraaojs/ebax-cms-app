import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import { getValue } from '../../../hooks/utils'
import HorizontalCard from '../../atomics/HorizontalCard'
import ButtonArea from './ButtonArea'
import CardArea from './CardArea'
import TitleText from './TitleText'

const Section43 = ({ blok }: { blok: any }) => {
  const backgroundColor = getValue(blok, 'background_color')
  const sectionBackground = {
    light: 'bg-base',
    medium: 'bg-base-1',
    dark: 'bg-base-2'
  }
  return (
    <section
      className={`section_43 text-content-light -mb-sct pt-sct relative rounded-b-sct bg-base ${backgroundColor(
        sectionBackground
      )}`}
      style={{ zIndex: -blok.zIndex }}
    >
      <div className="py-5xl px-lg md:py-9xl md:px-5xl max-w-[1366px] mx-auto">
        <div className="grid grid-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-6">
          <TitleText title_text={blok.title_text} />
          <CardArea
            card_area={blok.card_area}
            backgroundColor={backgroundColor}
          />
        </div>
        <ButtonArea button_area={blok.button_area} />
      </div>
    </section>
  )
}

export default Section43
