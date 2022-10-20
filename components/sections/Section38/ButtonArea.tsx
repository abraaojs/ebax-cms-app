import React from 'react'
import ButtonClear, { ButtonClearProps } from '../../atomics/ButtonClear'

const ButtonArea = ({
  button_area,
}: {
  button_area: ButtonClearProps[]
}) => {
  return (
    <div
      className="button_area flex justify-center"
    >
      {button_area.map((button: ButtonClearProps, i: number) => (
        <ButtonClear key={i} blok={button} />
      ))}
    </div>
  )
}

export default ButtonArea
