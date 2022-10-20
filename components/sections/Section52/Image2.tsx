import React from "react"

type TitleProps = {
  image_2: { filename: string, alt: string },
}

const Image2 = (props: TitleProps) => {
  const { image_2 } = props
  return (
    <img className="mb-lg md:mb-none md:mb-auto max-w-[327px] md:max-w-[449px]" src={image_2.filename} alt={image_2.alt} />
  )
}

export default Image2
