
import React from "react"
import formatMarkdown from "../../hooks/useMarkdown";

type TitleProps = {
  title: string,
  titleSize: string,
}

const TitlePartBlue = (props: TitleProps) => {
  const { title, titleSize } = props
  return (
    <span className={`title-${titleSize ? titleSize : '2'} uppercase font-primary`}>{
      formatMarkdown(title, {
        bold: 'text-primary',
        italic: 'text-secondary'
      }
      )
    }
    </span>
  )
}

export default TitlePartBlue