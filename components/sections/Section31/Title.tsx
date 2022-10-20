
import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"
import { colors_text } from "../../../utils/colors.object"

type TitleProps = {
  title: string,
  bold_color: string,
  title_font_topol: boolean
}

const Title = (props: TitleProps) => {
  const { title, title_font_topol, bold_color } = props
  return (
    <div className="w-full flex justify-center text-center md:text-left md:justify-start md:items-center max-w-[327px] my-[32px] md:my-[0px] mx-auto md:max-w-[502px] md:text-left md:mx-0">
      <h2 className={`title-2 ${title_font_topol ? 'font-primary' : 'font-secondary'} md:text-[55px] max-w-[235px] md:max-w-[450px]`}>
        {
          formatMarkdown(title, {
            bold: `${colors_text[bold_color]}`,
            italic: 'text-secondary'
          }
          )
        }
      </h2>
    </div>
  )
}

export default Title

