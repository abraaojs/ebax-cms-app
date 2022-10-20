import React from "react"

type TextContentProps = {
  text: { content: string, _uid: string }[],
}

const TextContent = (props: TextContentProps) => {
  const { text } = props
  return (
    <>
      {text.map((innerText: { content: string, _uid: string }) => <p key={innerText._uid} className="text-xmd md:text-md text-center mb-lg max-w-[766px] text-tertiary">{innerText.content}</p>)}
    </>
  )
}

export default TextContent 
