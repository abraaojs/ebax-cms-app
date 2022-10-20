import React from 'react'
import ButtonFilled, { ButtonFilledProps } from '../../atomics/ButtonFilled'

const ButtonArea = ({
  button_area,
}: {
  button_area: ButtonFilledProps[]
}) => {
  return (
    <div
      className="button_area flex justify-center mt-lg"
    >
      {button_area.map((button: ButtonFilledProps, i: number) => (
        <ButtonFilled key={i} blok={button} />
      ))}
    </div>
  )
}

export default ButtonArea
