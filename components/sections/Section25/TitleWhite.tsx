import React from "react"
import { colors_text } from "../../../utils/colors.object"

type TitleWhiteProps = {
  title: string,
  title_color: string,
  title_font_topol: boolean
}

const TitleWhite = (props: TitleWhiteProps) => {
  const { title, title_color, title_font_topol } = props
  return (
    <div className=" md:max-w-[630px] mb-[12px] md:mb-[0px]">
      <h2 className={`${colors_text[title_color]} title-2 uppercase ${title_font_topol ? 'font-primary' : 'font-secondary'}`}  >{title}</h2>
    </div>
  )
}

export default TitleWhite
