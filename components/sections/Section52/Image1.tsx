import React from "react"

type TitleProps = {
  image_1: { filename: string, alt: string },
}

const Image1 = (props: TitleProps) => {
  const { image_1 } = props
  return (
    <img className="mb-lg max-w-[327px] md:max-w-[449px]" src={image_1.filename} alt={image_1.alt} />
  )
}

export default Image1
