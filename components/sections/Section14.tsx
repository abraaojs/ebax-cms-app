import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import ButtonFilled from '../atomics/ButtonFilled'
import SimpleCard from '../atomics/SimpleCard'

const Section14 = ({ blok }: { blok: any }) => (
  <section
    className="section_14 bg-base-1 text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="flex flex-col gap-lg md:gap-mb py-5xl px-lg md:py-9xl md:px-5xl max-w-[1366px] mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr]">
        <div>
          <div className="flex mb-md md:justify-left">
            <h2 className="title_text title-2 font-primary max-w-3xl">
              {formatMarkdown(blok.title_text, {
                bold: 'text-primary',
                italic: 'text-secondary'
              })}
            </h2>
          </div>
          <p className="paragraph-2 font-secondary mb-xl md:mb-2xl md:max-w-[728px]">{blok.support_text}</p>
        </div>
        <div className="card_area md:ml-xl md:gap-md md:grid md:grid-cols-3">
          {blok.card_area.map((card: any, i: number) => (
            <SimpleCard
              key={i}
              blok={card}
              className="p-md mb-lg gap-md md:flex-col md:justify-center md:text-center"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Section14
