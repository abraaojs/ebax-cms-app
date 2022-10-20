import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

type TextProps = {
  text: string
}

const Text = (props: TextProps) => {
  const { text } = props
  return (
    <p className="text-[14px] text-center md:text-left mx-auto md:mt-[32px] md:max-w-[503px]">
      {formatMarkdown(text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default Text