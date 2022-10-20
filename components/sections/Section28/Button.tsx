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
    <div className="w-full flex justify-center mt-[16px] pb-[28px] md:pb-[0px] md:justify-start pb-[64px] md:pb-[0px] md:pt-[0] ">
      <ButtonFilled blok={Button} link={link ? link : ''} />
    </div>
  )
}

export default Button
