import React from 'react'
import TextCard from '../atomics/TextCard'

const Section18 = ({ blok }: { blok: any }) => (
  <section
    className="section_18 bg-base-1 text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="flex flex-col gap-lg md:gap-mb py-5xl px-lg md:py-9xl md:px-5xl">
      <div className="card_area gap-lg md:grid md:grid-cols-3">
        {blok.card_area.map((card: any, i: number) => (
          <TextCard
            key={i}
            blok={card}
            className="min-h-[189px] mb-lg"
          />
        ))}
      </div>
    </div>
  </section>
)

export default Section18
