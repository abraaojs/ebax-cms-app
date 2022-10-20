import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import ButtonFilled from '../atomics/ButtonFilled'

const Section12 = ({ blok }: { blok: any }) => (
  <section
    className="section_12 bg-base-3 text-content-dark -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="pt-7xl pb-5xl px-lg md:pt-12xl md:pb-9xl md:px-5xl max-w-[1366px] md:mx-auto">
      <div className="flex flex-col items-start items-center">
        <h2 className="title_text font-primary text-center mb-2xl max-w-lg md:max-w-4xl title-2">
          {blok.title_text}
        </h2>
      </div>
      <div className="card_area grid grid-cols-1 md:grid-cols-4 gap-lg">
        {blok.card_area.map((card: any, i: number) => (
          <div key={i} className="gap-sm">
            <h3 className="title-2 font-secondary mb-sm text-center">
              {card.title_text}
            </h3>
            <p className="paragraph-3 text-center">
              {formatMarkdown(card.content_text, {
                bold: 'font-bold',
                italic: 'font-italic'
              })}
            </p>
          </div>
        ))}
      </div>
      <div className="button_area flex justify-center mt-2xl">
        {blok.button_area.map((button: any, i: number) => (
          <ButtonFilled key={i} blok={button} />
        ))}
      </div>
    </div>
  </section>
)

export default Section12
