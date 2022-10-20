import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSubtitleClass = `
  font-secondary
  md:text-center
  mb-lg
  paragraph-2
  md:max-w-[80%]
`

const desktopSubtitleClass = `
md:text-left
`

const Subtitle = ({ subtitle_text }: { subtitle_text: string }) => {
  return (
    <p className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}>
      {subtitle_text}
    </p>
  )
}

export default Subtitle
