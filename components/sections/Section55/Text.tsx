import React from "react"

type TextProps = {
  text: string,
}

const Text = (props: TextProps) => {
  const { text } = props
  return (
    <p className="text-md md:text-[18px] text-center mb-xl max-w-[250px] md:max-w-[450px] text-center">{text}</p>
  )
}

export default Text 
