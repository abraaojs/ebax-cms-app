import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSubtitleClass = `
  font-secondary
  md:text-center
  text-left
  mb-lg
  title-4
  md:max-w-[80%]
`

const desktopSubtitleClass = `
md:text-left
`

const Subtitle = ({ subtitle_text }: { subtitle_text: string }) => {
  return (
    <h3 className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}>
      {subtitle_text}
    </h3>
  )
}

export default Subtitle
