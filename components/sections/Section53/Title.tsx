import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

type TitleProps = {
  title: string,
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <h2 className="text-center title-2 mb-lg md:max-w-[854px] mx-auto pt-3xl md:pt-[0px]">{
      formatMarkdown(title, {
        bold: 'text-primary',
        italic: 'text-secondary'
      }
      )
    }</h2>
  )
}

export default Title
