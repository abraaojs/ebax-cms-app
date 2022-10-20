import React from "react"

type TextProps = {
  text: string,
}

const Text = (props: TextProps) => {
  const { text } = props
  return (
    <p className="text-center paragraph-2 md:max-w-[734px] mx-auto">{text}</p>
  )
}

export default Text
