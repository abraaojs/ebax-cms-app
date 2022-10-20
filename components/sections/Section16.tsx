import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import ButtonFilled from '../atomics/ButtonFilled'
import SimpleCard from '../atomics/SimpleCard'

const Section16 = ({ blok }: { blok: any }) => (
  <section
    className="section_16 bg-base-1 text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="flex flex-col py-5xl px-lg md:py-9xl md:px-5xl max-w-[1366px] md:mx-auto">
      <div className="flex flex-col justify-center items-center gap-md">
        <h1 className="title_text title-1 font-primary text-center max-w-3xl">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h1>
        <p className="paragraph-2 font-secondary text-center mb-lg md:mb-2xl  md:max-w-[728px]">
          {blok.support_text}
        </p>
      </div>

      <div className="card_area md:ml-xl gap-md line hide-scrollbar md:grid md:grid-cols-3">
        {blok.card_area.map((card: any, i: number) => (
          <SimpleCard
            key={i}
            blok={card}
            className="p-md mb-lg gap-md md:gap-lg flex-col md:justify-center md:text-center min-w-[260px]"
          />
        ))}
      </div>

      <div className="button_area flex justify-center mb-9xl">
        {blok.button_area.map((button: any, i: number) => (
          <ButtonFilled key={i} blok={button} />
        ))}
      </div>
    </div>
  </section>
)

export default Section16
