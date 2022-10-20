import React from "react"
import { colors_bg, colors_text } from "../../../utils/colors.object"
import CardsWithIcon from "../../atomics/CardsWithIconFlex"
import BottonDetail from "./BottomDetail"
import TitleWhite from "./TitleWhite"

const Section25 = (props: any) => {
  const { title, cards_white, zIndex, background_color, title_color, title_font_topol } = props.blok
  return (
    <section className="relative md:-mb-[80px] -mb-[60px] pt-[64px] relative rounded-b-sct"
      style={{ zIndex: -zIndex }}>
      <div className={`h-full rounded-b-lg ${colors_bg[background_color]} pt-7xl pb-[64px] md:pt-12xl`}>
        <div className="max-w-[1366px] mx-auto  px-[24px] md:px-4xl  lg:px-5x2">
          <div className="w-full w-full text-center flex justify-center">
            <TitleWhite title={title} title_color={title_color} title_font_topol={title_font_topol} />
          </div>
          <CardsWithIcon bg_card={`${colors_bg[cards_white[0].inner_background_color]} ${colors_text[cards_white[0].inner_text_color]}  md:min-h-[230px] rounded-[8px] p-[16px]`} cards_white={cards_white} />
        </div>
      </div >
      <BottonDetail color={background_color} />
    </section>
  )
}

export default Section25