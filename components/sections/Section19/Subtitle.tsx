import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSubtitleClass = `
  paragraph-2 
  color-base 
  font-bold 
  text-center 
  px-lg 
  max-w-[530px] 
  leading-[22px]
`
const mobileSubtitleClass = `
`
const Subtitle = ({
  subtitle,
}: {
  subtitle: string
}) => {
  return (
    <p className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}>{subtitle}</p>
  )
}

export default Subtitle
