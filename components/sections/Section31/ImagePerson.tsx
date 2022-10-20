import React from "react"

type ImagePersonProps = {
  image_person: {
    filename: string
  }
}

const Image1 = (props: ImagePersonProps) => {
  const { image_person } = props
  return (
    <img className="max-w-[94px] md:max-w-[35%] object-cover rounded-sm" src={image_person.filename} alt="person" />
  )
}

export default Image1
