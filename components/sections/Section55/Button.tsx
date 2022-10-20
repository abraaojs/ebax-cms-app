import React from "react"
import ButtonFilled from "../../atomics/ButtonFilled"

type ButtonProps = {
  Button: {
    link?: string
  }
}

const Button = (props: ButtonProps) => {
  const { Button } = props
  const { link } = Button
  return (
    <div className="w-full flex justify-center pb-9xl  md:pb-9xl  ">
      <ButtonFilled blok={Button} link={link ? link : ''} />
    </div>
  )
}

export default Button
