import React from 'react'
import ButtonFilled from '../atomics/ButtonFilled'

const Section1 = ({ blok }: { blok: any }) => {
  return (
    <section
      className="section_1 bg-base-3 text-content-dark -mb-sct pt-sct relative rounded-b-sct"
      style={{ zIndex: -blok.zIndex }}
    >
      <div className="max-w-[1366px] mx-auto pt-7xl pb-5xl px-lg md:pt-12xl md:pb-9xl md:px-5xl">
        <div className="flex flex-col items-start md:items-center">
          <h2 className="title_text font-primary title-3 mb-lg max-w-lg md:max-w-4xl md:text-center">
            {blok.title_text}
          </h2>
          <p className="subtitle_text paragraph-2 max-w-md mb-2xl md:text-center">
            {blok.subtitle_text}
          </p>
        </div>
        <div
          className="image h-[242px] relative mx-[-24px] mb-2xl bg-cover md:rounded-xs md:mx-0"
          style={{
            backgroundImage: `url(${blok.image.filename})`,
            backgroundPosition: blok.image_position
          }}
        ></div>
        <div className={`card_area grid grid-cols-1 md:grid-cols-${blok.card_area.length} gap-2xl mb-2xl`}>
          {blok.card_area.map((card: any, i: number) => (
            <div key={i}>
              <h3 className="text-[24px] font-secondary mb-sm">
                {card.title_text}
              </h3>
              <p className="paragraph-3">{card.content_text}</p>
            </div>
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
}

export default Section1
