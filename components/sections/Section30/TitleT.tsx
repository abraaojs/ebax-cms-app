
import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"
import { colors_text } from "../../../utils/colors.object"

type TitleProps = {
  Title: string,
  bold_color: string,
  title_font_topol: boolean
}

const TitleT = (props: TitleProps) => {
  const { Title, bold_color, title_font_topol } = props
  return (
    <div className="w-full flex justify-center text-center">
      <h2 className={`text-[40px] max-w-[240px] md:max-w-full md:w-full ${title_font_topol ? 'font-primary' : 'font-secondary'} mb-[24px] md:text-[55px] md:mb-[16px]`}>
        {
          formatMarkdown(Title, {
            bold: `${colors_text[bold_color]}`,
            italic: 'text-secondary'
          }
          )
        }
      </h2>
    </div>
  )
}

export default TitleT
