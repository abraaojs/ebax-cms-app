import React from "react"

type ImageProps = {
  image: { filename: string, alt: string },
}

const Image = (props: ImageProps) => {
  const { image } = props
  return (
    <img className="my-2xl max-w-[327px] h-[116px] md:max-w-[90%] md:h-auto mx-[auto] object-cover " src={image.filename} alt={image.alt} />
  )
}

export default Image
