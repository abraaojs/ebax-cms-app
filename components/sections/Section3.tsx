import React from 'react'
import VerticalCard from '../atomics/VerticalCard'
import formatMarkdown from '../../hooks/useMarkdown'

const Section3 = ({ blok }: { blok: any }) => (
  <section
    className="section_3 bg-base-1 text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="pt-7xl pb-5xl px-lg md:pt-12xl md:pb-9xl md:px-5xl max-w-[1366px] md:mx-auto">
      <div className="md:text-center mb-xl">
        <h2 className="title_text title-2 uppercase">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h2>
      </div>
      <div className="card_area grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-row gap-lg md:gap-xl">
        {blok.card_area.map((card: any, i: number) => (
          <VerticalCard key={i} blok={card} />
        ))}
      </div>
    </div>
  </section>
)

export default Section3
