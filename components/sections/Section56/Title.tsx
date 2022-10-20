import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

type TitleProps = {
  title: string,
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <h3 className="text-[28px] text-[30px] uppercase mb-[12px]">{
      formatMarkdown(title, {
        bold: 'text-primary',
        italic: 'text-secondary'
      }
      )
    }</h3>
  )
}

export default Title
