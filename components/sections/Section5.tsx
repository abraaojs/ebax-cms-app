import React from 'react'
import ButtonFilled from '../atomics/ButtonFilled'
import formatMarkdown from '../../hooks/useMarkdown'

const Section5 = ({ blok }: any) => {
  return (
    <section
      className="section_5 bg-base text-content-light -mb-sct pt-sct relative rounded-b-sct"
      style={{ zIndex: -blok.zIndex }}
    >
      <div className="grid relative pt-7xl pb-5xl px-lg md:pt-12xl md:pb-9xl md:px-5xl md:grid-cols-[3fr_2fr] md:gap-lg max-w-[1366px] mx-auto">
        <div className="z-1 bg-gradient-to-r from-base via-base md:pr-xl">
          <h2 className="font-primary title-2 mb-xl">
            {formatMarkdown(blok.title_text, {
              bold: 'text-primary',
              italic: 'text-secondary'
            })}{' '}
          </h2>
          <h3 className="font-secondary paragraph-2 font-bold mb-md">
            {blok.subtitle_text}
          </h3>
          <p className="paragraph-2 mb-xl">{blok.support_text}</p>
          <div className="button_area hidden md:flex mt-xl">
            {blok.button_area.map((button: any, i: number) => (
              <ButtonFilled key={i} blok={button} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center md:block md:flex-1">
          <div className="flex justify-center">
            <img
              className="md:hidden max-w-lg w-full"
              src={blok.image_side_mobile.filename}
              alt={blok.image_side_mobile.alt}
            />
          </div>
          <div className="button_area flex md:hidden justify-center mt-xl">
            {blok.button_area.map((button: any, i: number) => (
              <ButtonFilled key={i} blok={button} />
            ))}
          </div>
        </div>
        <img
          className="hidden md:block absolute right-0 top-0 h-full"
          src={blok.image_side.filename}
          alt={blok.image_side.alt}
        />
      </div>
    </section>
  )
}

export default Section5
