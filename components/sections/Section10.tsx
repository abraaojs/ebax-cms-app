import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import ImageCard from '../atomics/ImageCard'

const Section10 = ({ blok }: { blok: any }) => (
  <section
    className="section_10 bg-base text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="flex flex-col gap-lg md:gap-mb py-5xl px-lg md:py-9xl md:px-5xl max-w-[1366px] mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-6">
        <div>
          <div className="flex md:justify-left md:mb-md">
            <h2 className="title_text title-2 font-primary md:text-left max-w-3xl">
              {formatMarkdown(blok.title_text, {
                bold: 'text-primary',
                italic: 'text-secondary'
              })}
            </h2>
          </div>
          <p className="paragraph-2 font-secondary">{blok.support_text}</p>
        </div>
        <div className="card_area gap-md md:grid md:grid-cols-2">
          {blok.card_area.map((card: any, i: number) => (
            <ImageCard
              key={i}
              blok={card}
              className="min-h-[166px] md:min-h-[166px] mb-lg"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Section10
