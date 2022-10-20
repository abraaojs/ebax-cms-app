import React from "react"

type ImageDesktopProps = {
  image: { filename: string, alt: string },
}

const ImageDesktop = (props: ImageDesktopProps) => {
  const { image } = props
  return (
    <img className="w-[327px] h-[124px] object-cover object-center rounded-[10px] mb-xl lg:hidden lg:text-start" src={image.filename} alt={image.alt} />
  )
}

export default ImageDesktop
