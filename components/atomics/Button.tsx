import React from "react"
import ButtonFilled from "./ButtonFilled"

type ButtonProps = {
  Button: {
    link?: string
  }
}

const Button = (props: ButtonProps) => {
  const { Button } = props
  const { link } = Button
  return (
    <div className="flex justify-center md:justify-start  ">
      <ButtonFilled blok={Button} link={link ? link : ''} />
    </div>
  )
}

export default Button
