import React from "react"

type ImageMobileProps = {
  image: { filename: string, alt: string },
}

const ImageMobile = (props: ImageMobileProps) => {
  const { image } = props
  return (
    <img className="object-cover h-fit object-center rounded-[10px] hidden lg:block lg:max-h-[366px]" src={image.filename} alt={image.alt} />
  )
}

export default ImageMobile
