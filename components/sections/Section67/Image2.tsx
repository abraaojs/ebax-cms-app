import React from "react"

type Image2Props = {
  image2: {
    filename: string
  }
}

const Image2 = (props: Image2Props) => {
  const { image2 } = props
  return (
    <img className="w-[calc(20%-0.5rem)] md:w-20% object-cover rounded-sm" src={image2.filename} alt="person" />
  )
}

export default Image2
