import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import SquareCard from '../atomics/SquareCard'

const Section9 = ({ blok }: { blok: any }) => (
  <section
    className="section_9 bg-base text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="flex flex-col gap-lg md:gap-mb py-5xl px-lg md:py-9xl md:px-5xl max-w-[1366px] md:mx-auto">
      <div className="flex md:justify-center">
        <h1 className="title_text title-1 font-primary md:text-center max-w-3xl">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h1>
      </div>
      <div className="flex md:justify-center md:text-center">
        <p className="paragraph-2 font-secondary font-bold">
          {blok.support_text}
        </p>
      </div>
      <div className="flex md:justify-center md:text-center">
        <p className="paragraph-2 font-secondary mb-3xl md:mb-2xl md:max-w-[728px]">
          {blok.subtitle_text}
        </p>
      </div>
      <div className="card_area gap-md md:grid md:grid-cols-5">
        {blok.card_area.map((card: any, i: number) => (
          <SquareCard
            key={i}
            blok={card}
            className="min-h-[166px] md:min-h-[166px] mb-lg bg-base-2"
          />
        ))}
      </div>
    </div>
  </section>
)

export default Section9
