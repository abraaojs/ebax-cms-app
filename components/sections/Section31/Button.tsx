import React from "react"
import ButtonFilled from "../../atomics/ButtonFilled"

type ButtonProps = {
  Button: {
    link?: string
  }
}

const ButtonX = (props: ButtonProps) => {
  const { Button } = props
  const { link } = Button
  return (
    <div className="w-full flex relative mt-[16px]  items-start md:justify-start md:w-[203px]">
      <ButtonFilled blok={Button} className="!w-full" link={link ? link : ''} />
    </div>
  )
}

export default ButtonX
