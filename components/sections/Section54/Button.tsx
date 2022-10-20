import React from "react"
import ButtonFilled from "../../atomics/ButtonFilled"

type ButtonProps = {
  Button: {
    link?: string
  },
  classN: string
}

const Button = (props: ButtonProps) => {
  const { Button, classN } = props
  const { link } = Button
  return (
    <div className={`w-full flex justify-center hidden md:min-w-[298px] [&>a]:px-6xl ${classN}`}>
      <ButtonFilled blok={Button} link={link ? link : ''} />
    </div>
  )
}

export default Button
