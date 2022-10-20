import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"


type TextProps = {
  Text: string
}

const TextS3 = (props: TextProps) => {
  const { Text } = props
  return (
    <p className="my-[16px] text-center max-w-[480px]  mx-auto text-[14px] md:my-[16px]">{formatMarkdown(Text, {
      bold: 'font-bold',
      italic: 'font-italic'
    })}</p>
  )
}

export default TextS3