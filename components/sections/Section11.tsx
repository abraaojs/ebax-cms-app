import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import Tag from '../atomics/Tag'
import Cotainer from "../atomics/Container"

const Section11 = ({ blok }: { blok: any }) => (
  <section
    className="section_11 bg-base text-content-light bg-cover -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex, backgroundImage: `url(${blok.background_image.filename})` }}
  >
    <div
      className="image h-[340px] md:h-[896px] relative rounded-b-sct flex justify-end md:pt-12xl md:pb-9xl max-w-[1366px] md:mx-auto"
    >
      <div className="hidden px-lg mt-5xl md:block max-w-[504px] bg-base rounded-sm mr-5xl md:py-5x">
        <h2 className="title_text title-2 font-primary md:text-left max-w-[327px]">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h2>
        <p className="paragraph-3 font-secondary mt-md mb-xl ">{blok.subtitle_text}</p>

        <div className="tag_area md:flex md:flex-wrap md:gap-sm md:mb-4xl">
          {blok.tag_area.map((tag: any, i: number) => (
            <Tag
              hiddeText={false}
              key={i}
              blok={tag}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="block px-lg mt-5xl md:hidden">
      <h2 className="title_text title-2 font-primary md:text-left max-w-[327px]">
        {formatMarkdown(blok.title_text, {
          bold: 'text-primary',
          italic: 'text-secondary'
        })}
      </h2>
      <p className="paragraph-3 font-secondary mt-md mb-xl ">{blok.subtitle_text}</p>

      <div className="tag_area gap-md md:grid md:grid-cols-5 pb-5xl">
        {blok.tag_area.map((tag: any, i: number) => (
          <Tag
            hiddeText={false}
            key={i}
            blok={tag}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Section11
