import React from 'react'

type Image1Props = {
  image_1: {
    filename: string
  }
}

const Image1 = (props: Image1Props) => {
  const { image_1 } = props
  return (
    <img
      className="max-w-[223px] ml-[-16px] mr-[16px] md:max-w-[65%] md:min-w-auto object-cover rounded-sm"
      src={image_1.filename}
    />
  )
}

export default Image1
