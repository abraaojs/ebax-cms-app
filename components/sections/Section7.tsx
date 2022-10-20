import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import ImageCard from '../atomics/ImageCard'

const Section7 = ({ blok }: { blok: any }) => (
  <section
    className="section_7 bg-base text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="flex flex-col gap-lg md:gap-5xl py-5xl px-lg md:py-9xl md:px-5xl max-w-[1366px] mx-auto">
      <div className="flex md:justify-center">
        <h2 className="title_text title-2 font-primary md:text-center max-w-3xl">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h2>
      </div>
      <div className="card_area flex flex-col md:flex-row gap-lg">
        {blok.card_area.map((card: any, i: number) => (
          <ImageCard key={i} blok={card} className="min-w-[296px] md:min-w-0" />
        ))}
      </div>
    </div>
  </section>
)

export default Section7
