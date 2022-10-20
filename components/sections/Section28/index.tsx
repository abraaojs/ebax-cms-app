import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"
import { colors_bg, colors_text } from "../../../utils/colors.object"
import CardList from "../../atomics/CardList"
import TitlePartBlue from "../../atomics/TitlePartBlue"
import Button from "./Button"
import Image from "./Image"

type Section28 = {
  blok: {
    title: string,
    text_group: object[] | any,
    image: { filename: string, alt: string },
    button: any,
    zIndex: any
    background_color: string
    text_color: string
    bold_color: string
    title_font_topol: boolean
  }
}

const Section28 = (props: Section28) => {
  const { image, title, text_group, button, zIndex, background_color, text_color, bold_color, title_font_topol } = props.blok

  return (
    <section className={`flex-col md:flex md:flex-row ${colors_bg[background_color]} -mb-sct pt-sct relative rounded-b-sct max-h-fit ${colors_text[text_color]}`}
      style={{ zIndex: -zIndex }}>
      <div className="[&>*]:w-[100%] max-h-[376px] md:min-w-[50%] md:rounded-bl-lg md:flex overflow-y-hidden overflow-hidden max-h-fit md:min-h-[756px] lg:max-h-[756px]">
        <Image image={image} />
      </div>
      <div className={`px-[24px] md:px-[32px] md:pr-[200px] my-auto md:pr-0 md:pt-0  md:mt-[0] md:pt-[0] md:w-[50%] ${colors_bg[background_color]} rounded-b-sct md:flex md:flex-col lg:max-h-[756px]`}>
        <div className="md:max-w-[694px]">
          <div className="md:max-w-[300px] max-w-[100px] py-[32px] md:pb-[32px] title-1 md:pt-[128px]">
            <h2 className={`text-[40px] uppercase md:text-[55px] ${title_font_topol ? 'font-primary' : 'font-secondary'}`}>{
              formatMarkdown(title, {
                bold: `${colors_text[bold_color]}`,
                italic: 'text-secondary'
              }
              )
            }
            </h2>
          </div>
          <div className="h-full rounded-b-sct w-full md:pb-[96px]">
            <CardList bg_card={colors_bg[background_color]} fontSize="text-[20px] md:text-[24px]" hasBorder={false} widthDesktop="100%" text_group={text_group} />
            <Button Button={button[0]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section28