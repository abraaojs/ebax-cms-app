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
    <div>
      <ButtonFilled blok={Button} link={link ? link : ''} />
    </div>
  )
}

export default Button
