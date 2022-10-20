import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import ButtonFilled, { ButtonFilledProps } from '../../atomics/ButtonFilled'

const desktopButtonClass = `
  md:display-none
`
const mobileButtonClass = `
  button_area 
  flex 
  mt-lg
`
const ButtonArea = ({
  button_area,
}: {
  button_area: ButtonFilledProps[]
}) => {
  return (
    <div className={mergeClassString(mobileButtonClass, desktopButtonClass)}>
      {button_area.map((button: any, i: number) => (
        <ButtonFilled
          key={i}
          blok={button}
        />
      ))}
    </div>
  )
}

export default ButtonArea
