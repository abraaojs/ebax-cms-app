import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import ButtonFilled from '../../atomics/ButtonFilled'

const desktopSubtitleClass = `
md:mt-[32px]
`
const mobileSubtitleClass = `
button_area flex justify-center mt-[48px]
`

const ButtonArea = ({ button_area }: { button_area: any }) => {
  return (
    <div
      className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}
    >
      {button_area.map((button: any, i: number) => (
        <ButtonFilled key={i} blok={button} />
      ))}
    </div>
  )
}

export default ButtonArea
