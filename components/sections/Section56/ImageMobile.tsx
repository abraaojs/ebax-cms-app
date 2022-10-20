import React from "react"

type ImageProps = {
  image: { filename: string, alt: string },
}

const ImageMobile = (props: ImageProps) => {
  const { image } = props
  return (
    <img src={image.filename} alt={image.alt} className="w-full md:hidden" />
  )
}

export default ImageMobile
