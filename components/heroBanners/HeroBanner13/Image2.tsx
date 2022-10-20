import React from 'react'

type Image2Props = {
  image_2: {
    filename: string
  }
}

const Image2 = (props: Image2Props) => {
  const { image_2 } = props
  return (
    <img
      className="max-w-[88px] md:max-w-[35%] object-cover rounded-sm"
      src={image_2.filename}
    />
  )
}

export default Image2
