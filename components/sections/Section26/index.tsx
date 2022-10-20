import React from "react"
import CarouselPointer from "../../atomics/CarouselPointer"
import Button from "../../atomics/Button"
import { colors_bg, colors_text } from "../../../utils/colors.object"

type Section26Props = {
  blok: {
    title: string,
    card_carousel: {
      slider_cards: object[],
    }[],
    button: object[],
    zIndex: any,
    background_color: string,
    text_color: string
  }
}

const Section26 = (props: Section26Props) => {
  const { title, card_carousel, button, zIndex, background_color, text_color } = props.blok
  return (
    <section className={`${colors_bg[background_color]} justify-center py-[64px] ${colors_text[text_color]} -mb-sct relative rounded-b-sct`}
      style={{ zIndex: -zIndex }}>
      <h2 className="title-10 text-center mb-3xl uppercase md:mb-3xl pt-[32px] md:pt-[80px]">{title}</h2>

      <CarouselPointer paddingLeft={"pl-[24px] md:pl-[68px]"} card_carousel={card_carousel[0]} />

      <div className="md:flex justify-center mt-[28px] md:mt-[34px] px-[24px]">
        <Button Button={button[0]} />
      </div>
    </section>
  )
}

export default Section26