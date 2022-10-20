import React from "react"
import Icon from "./Icon"
import CardList from "../../atomics/CardList"
import TitlePartBlue from "../../atomics/TitlePartBlueFlex"
import { colors_bg, colors_text } from "../../../utils/colors.object"

type Section29 = {
  blok: {
    title: string,
    text_group: object[] | any,
    component: string,
    icon_type: string,
    zIndex: any,
    background_color: string,
    text_color: string,
    bold_color: string,
    title_font_topol: boolean
  }
}

const Section29 = (props: Section29) => {
  const { icon_type, title, text_group, zIndex, background_color, text_color, bold_color, title_font_topol } = props.blok

  return (
    <section className={`flex-col ${colors_bg[background_color]} pb-[48px] md:py-[96px] -mb-sct pt-sct relative rounded-b-sct ${colors_text[text_color]}`}
      style={{ zIndex: -zIndex }}>
      <div className="max-w-[1366px] px-[24px] md:px-[68px] mx-auto">
        <div className="flex items-center pt-[64px] md:flex-col">
          <Icon icon_type={icon_type} marginAuto={true} />
          <TitlePartBlue titleSize='2' title={title} bold_color={bold_color} title_font_topol={title_font_topol} />
        </div>
        <div className="md:flex md:justify-evenly mt-[32px] [&>div]:md:w-[48%] [&>div]:md:max-w-[603px]">
          <CardList bg_card={colors_bg[background_color]} fontSize="title-4" hasBorder={false} widthDesktop="100%" text_group={text_group} />
        </div>
      </div>
    </section>
  )
}

export default Section29