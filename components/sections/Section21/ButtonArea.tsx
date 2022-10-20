import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import ButtonFilled, { ButtonFilledProps } from '../../atomics/ButtonFilled'

const ButtonArea = ({
  button_area,
}: {
  button_area: ButtonFilledProps[]
}) => {
  return (
    <div
      className="button_area flex justify-center mt-3xl"
    >
      {button_area.map((button: any, i: number) => (
        <ButtonFilled
          blok={button}
        />
      ))}
    </div>
  )
}

export default ButtonArea
