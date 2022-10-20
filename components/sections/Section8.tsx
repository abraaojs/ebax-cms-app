import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import ButtonClear from '../atomics/ButtonClear'
import Container from "../atomics/Container"

const Section8 = ({ blok }: { blok: any }) => (
  <section
    className={`section_7 bg-base text-content-light -mb-sct relative rounded-b-sct ${blok.isItLast ? "pb-[144px] pt-[96px] " : "py-5xl md:pb-9xl md:pt-[68px]"}`}
    style={{ zIndex: -blok.zIndex }}
  >
    <Container paddingX='px-lg md:px-5xl'>
      <div className="bg-base-1 flex flex-col md:flex-row md:items-center gap-lg px-md md:px-5xl rounded-sm md:py-md py-xl">
        <div className="items-start md:items-center md:w-4.5/12 w-full">
          <h3 className="title_text color-primary-extradark title-3 md:text-3xl text-left md:text-left  uppercase">
            {formatMarkdown(blok.title_text, {
              bold: 'text-primary',
              italic: 'text-secondary'
            })}
          </h3>
        </div>
        <div className="image md:w-3/12 w-full">
          <img src={blok.image_content.filename} className="w-full" />
        </div>
        <div className="stack gap-lg md:w-4.5/12 w-full">
          <p className="subtitle_text text-[12px] md:text-[14px] text-[#001F60]">{blok.subtitle_text}</p>
          <div className="button_area">
            {blok.button_area.map((button: any, i: number) => (
              <ButtonClear key={i} blok={button} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default Section8
