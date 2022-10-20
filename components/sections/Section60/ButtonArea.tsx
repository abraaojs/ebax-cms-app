import React from 'react'
import ButtonFilled, { ButtonFilledProps } from '../../atomics/ButtonFilled'

const ButtonArea = ({
  button_area,
  className,
}: {
  button_area: ButtonFilledProps[]
  className: string
}) => {
  return (
    <div
      className={className}
    >
      {button_area.map((button: ButtonFilledProps, i: number) => (
        <ButtonFilled key={i} blok={button} />
      ))}
    </div>
  )
}

export default ButtonArea
