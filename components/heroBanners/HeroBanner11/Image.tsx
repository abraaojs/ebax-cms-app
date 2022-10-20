import React from 'react'

type Image1Props = {
  image: {
    filename: string
  }
}

const Image = (props: Image1Props) => {
  const { image } = props
  return (
    <img
      className="max-w-[223px] min-w-full md:max-w-[100%] md:min-w-auto object-cover rounded-sm"
      src={image.filename}
    />
  )
}

export default Image
