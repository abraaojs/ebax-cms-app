
import React from "react"
import formatMarkdown from "../../hooks/useMarkdown";
import { colors_text } from "../../utils/colors.object";

type TitleProps = {
  title: string,
  titleSize: string,
  bold_color: string,
  title_font_topol: boolean
}

const TitlePartBlue = (props: TitleProps) => {
  const { title, titleSize, bold_color, title_font_topol } = props
  return (
    <span className={`title-${titleSize ? titleSize : '2'} uppercase ${title_font_topol ? 'font-primary' : 'font-secondary'}`}>{
      formatMarkdown(title, {
        bold: `${colors_text[bold_color]}`,
        italic: 'text-secondary'
      }
      )
    }
    </span>
  )
}

export default TitlePartBlue