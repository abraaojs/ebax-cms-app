import React from 'react'

type Image1Props = {
  image_2: {
    filename: string
  }
}

const Image2 = (props: Image1Props) => {
  const { image_2 } = props
  return (
    <img
      className="w-[25%] object-cover rounded-sm"
      src={image_2.filename}
    />
  )
}

export default Image2
