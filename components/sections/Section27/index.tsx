import React from "react"
import { colors_bg, colors_text } from "../../../utils/colors.object"
import CardList from "../../atomics/CardList"
import Button from "./Button"
import Title9 from "./Title9"

type Section27 = {
  blok: {
    text: string,
    text_group: object[],
    image: { filename: string, alt: string },
    button: any,
    zIndex: any,
    background_color: string
    text_color: string
    title_font_topol: boolean
  }
}

const Section27 = (props: Section27) => {
  const { text, text_group, button, zIndex, background_color, text_color, title_font_topol } = props.blok

  return (
    <section className={`h-full ${colors_bg[background_color]} ${colors_text[text_color]} pt-7xl md:pb-9xl pb-[64px] md:pt-12xl -mb-[60px] pt-sct relative rounded-b-sct`}
      style={{ zIndex: -zIndex }}>
      <div className="max-w-[1366px] mx-auto px-[24px] md:px-5x2">
        <div className="md:flex md:flex-row pt-[64px] md:pt-auto">
          <div className="pb-3xl md:w-[50%] md:px-[12px]">
            <Title9 title={text} title_font_topol={title_font_topol} />
          </div>
          <div className="md:w-[50%]">
            <CardList bg_card={colors_bg[background_color]} fontSize="text-[20px] md:text-[24px]" hasBorder={true} widthDesktop="100%" text_group={text_group} />
          </div>
        </div>
        <div className="w-full [&>div]:w-[100%] [&>div]:flex [&>div]:justify-center [&>div]:pt-[35px]  [&>div]:md:pb-[16px] [&>div]:md:justify-center">
          <Button Button={button[0]} />
        </div>
      </div>
    </section >
  )
}

export default Section27