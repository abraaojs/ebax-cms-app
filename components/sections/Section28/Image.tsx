import React from "react"

type ImagePersonProps = {
  image: {
    filename: string,
    alt: string,
  }
}

const Image = (props: ImagePersonProps) => {
  const { image } = props
  return (
    <img className="max-h-[375px] md:h-full md:max-h-fit md:w-[100%] md:rounded-bl-lg object-cover" src={image.filename} alt={image.alt}></img>
  )
}

export default Image
