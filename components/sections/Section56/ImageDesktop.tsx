import React from "react"

type ImageProps = {
  image: { filename: string, alt: string },
}

const ImageDesktop = (props: ImageProps) => {
  const { image } = props
  return (
    <div className="overflow-hidden max-w-[200px] justify-center hidden md:flex h-full">
      <img src={image.filename} alt={image.alt} className=" hidden md:block" />
    </div>
  )
}

export default ImageDesktop
