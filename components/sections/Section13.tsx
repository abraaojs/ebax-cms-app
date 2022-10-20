import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import ButtonFilled from '../atomics/ButtonFilled'
import Tag from '../atomics/Tag'

const Section13 = ({ blok }: { blok: any }) => (
  <section
    className="section_13 bg-base text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="flex flex-col py-5xl px-lg md:py-9xl md:px-5xl max-w-[1366px] md:mx-auto">
      <div className="flex flex-col justify-center items-center gap-lg">
        <img
          className="w-[60px]"
          src={`/icons/${blok.icon_type}.svg`}
          alt={blok.icon_type}
        />
        <h1 className="title_text title-1 font-primary text-center max-w-3xl">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h1>
        <p className="paragraph-2 font-secondary text-center mb-lg md:mb-2xl  md:max-w-[728px]">
          {blok.subtitle_text}
        </p>
      </div>
      <div className="tag_area mb-lg md:justify-center md:flex md:flex-wrap md:gap-sm md:mb-5xl">
        {blok.tag_area.map((tag: any, i: number) => (
          <Tag
            hiddeText={false}
            key={i}
            blok={tag}
          />
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

export default Section13
