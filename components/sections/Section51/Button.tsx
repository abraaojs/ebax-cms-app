import React from "react"
import ButtonFilled from "../../atomics/ButtonFilled"

type ButtonProps = {
  Button: {
    link?: string
  }
}

const ButtonS3 = (props: ButtonProps) => {
  const { Button } = props
  const { link } = Button
  return (
    <div className="w-full flex justify-center w-full mt-2xl px-lg md:px-[0px]">
      <ButtonFilled blok={Button} link={link ? link : ''} />
    </div>
  )
}

export default ButtonS3
