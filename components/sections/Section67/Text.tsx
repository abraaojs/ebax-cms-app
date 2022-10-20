import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

type TextProps = {
  text: string
}

const Text = (props: TextProps) => {
  const { text } = props
  return (
    <p className="paragraph-3 md:text-left ">
      {formatMarkdown(text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default Text