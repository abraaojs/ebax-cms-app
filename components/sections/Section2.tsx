import React from 'react'
import HorizontalCard from '../atomics/HorizontalCard'
import formatMarkdown from '../../hooks/useMarkdown'
import { getValue } from '../../hooks/utils'

const Section2 = ({ blok }: { blok: any }) => {
  const backgroundColor = getValue(blok, 'background_color')
  const sectionBackground = {
    light: 'bg-base',
    medium: 'bg-base-1',
    dark: 'bg-base-2'
  }
  const cardsBackground = {
    light: 'bg-base-1',
    medium: 'bg-base',
    dark: 'bg-base'
  }
  return (
    <section
      className={`section_2 text-content-light -mb-sct pt-sct relative rounded-b-sct bg-base ${backgroundColor(
        sectionBackground
      )}`}
      style={{ zIndex: -blok.zIndex }}
    >
      <div className="py-5xl px-lg md:py-9xl md:px-5xl max-w-[1366px] md:mx-auto">
        <div className="grid grid-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-6">
          <div>
            <h2 className="title_text title-2 max-w-lg mb-xl uppercase">
              {
                formatMarkdown(blok.title_text, {
                  bold: 'text-primary',
                  italic: 'text-secondary'
                }
                )
              }
            </h2>
          </div>
          <div className="card_area flex flex-col gap-4">
            {blok.card_area.map((card: any, i: number) => (
              <HorizontalCard
                iconWidth="w-[32px] md:w-[60px]"
                key={i}
                blok={card}
                className={`${backgroundColor(cardsBackground)}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
