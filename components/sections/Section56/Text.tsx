import React from "react"

type TextProps = {
  text: string,
}

const Text = (props: TextProps) => {
  const { text } = props
  return (
    <p className="text-[#001F60] text-[12px] md:text-[14px] mb-[15px]">{text}</p>
  )
}

export default Text 
