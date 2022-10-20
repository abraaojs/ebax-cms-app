import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSubtitleClass = `
  color-base-1 
  font-secondary
  text-center
  mb-lg
  title-5
  md:max-w-[80%]
`

const desktopSubtitleClass = `
 text-left
`

const Subtitle = ({ subtitle_text }: { subtitle_text: string }) => {
  return (
    <h3 className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}>
      {subtitle_text}
    </h3>
  )
}

export default Subtitle
