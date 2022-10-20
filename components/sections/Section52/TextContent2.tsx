import React from "react"

type TextContentProps = {
  text2: { content: string, _uid: string }[],
}

const TextContent = (props: TextContentProps) => {
  const { text2 } = props
  return (

    <ul className="flex flex-col  max-w-[451px] text-tertiary">
      {text2
        .map((innerText: { content: string, _uid: string }, index: number) => (
          index !== text2.length - 1
        ) ? (
          <li key={innerText._uid} className="mb-lg md:mb-[38px] text-xmd md:text-md font-400 mx-lg md:mx-none">{innerText.content}</li>
        ) : <span key={innerText._uid} className="text-xmd md:text-smd font-700 align-self-center md:mx-none"> {innerText.content}</span>
        )}
    </ul>

  )
}

export default TextContent 
