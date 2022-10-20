import React from "react"

type Image1Props = {
  image1: {
    filename: string
  }
}

const Image1 = (props: Image1Props) => {
  const { image1 } = props
  return (
    <img className="w-[calc(80%-0.5rem)] md:w-50% object-cover rounded-sm" src={image1.filename} alt="person" />
  )
}

export default Image1
