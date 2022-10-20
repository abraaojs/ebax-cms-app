import React from "react"
import ButtonFilled from "../../atomics/ButtonFilled"

type ButtonProps = {
  Button: {
    link?: string
  },
  classN: string
}

const ButtonDesktop = (props: ButtonProps) => {
  const { Button, classN } = props
  const { link } = Button
  return (
    <div className={`w-full flex justify-center pb-[38px] max-w-[330px] md:min-w-[298px] [&>a]:px-6xl ${classN}`}>
      <ButtonFilled blok={Button} link={link ? link : ''} />
    </div>
  )
}

export default ButtonDesktop
