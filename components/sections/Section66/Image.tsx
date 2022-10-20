import React from 'react'

type ImageProps = {
  image: {
    filename: string
  }
}

const Image = (props: ImageProps) => {
  const { image } = props
  return (
    <img
      className="w-full object-cover rounded-sm"
      src={image.filename}
    />
  )
}

export default Image
