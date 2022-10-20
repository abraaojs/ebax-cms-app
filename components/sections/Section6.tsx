import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import ButtonFilled from '../atomics/ButtonFilled'
import SquareCard from '../atomics/SquareCard'

const Section6 = ({ blok }: { blok: any }) => (
  <section
    className="section_6 bg-base-1 text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="stack gap-2xl pt-7xl pb-5xl px-lg md:pt-12xl md:pb-9xl md:px-5xl max-w-[1366px] mx-auto">
      <div className="flex md:justify-center">
        <h2 className="title_text title-2 font-primary md:text-center md:max-w-4xl">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h2>
      </div>
      <div className="card_area line gap-md -mr-5 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-x-visible pb-lg pr-lg">
        {blok.card_area.map((card: any, i: number) => (
          <SquareCard
            key={i}
            blok={card}
            className="min-w-[296px] md:min-w-0"
          />
        ))}
      </div>
      <div className="button_area flex justify-center">
        {blok.button_area.map((button: any, i: number) => (
          <ButtonFilled key={i} blok={button} />
        ))}
      </div>
    </div>
  </section>
)

export default Section6
