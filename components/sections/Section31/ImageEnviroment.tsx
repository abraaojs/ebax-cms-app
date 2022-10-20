import React from "react"

type ImagePersonProps = {
  image_enviroment: {
    filename: string
  }
}

const Image2 = (props: ImagePersonProps) => {
  const { image_enviroment } = props
  return (
    <img className="max-w-[217px] h-[300px] md:h-[411px] mr-[16px] md:max-w-[61%] md:min-w-auto object-cover rounded-sm" src={image_enviroment.filename} alt="person" />
  )
}

export default Image2
