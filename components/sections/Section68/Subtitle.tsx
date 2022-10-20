import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
`
const mobileDivClass = `
  md:justify-center
  md:flex
`
const desktopSubtitleClass = `
  md:text-center 
`
const mobileSubtitleClass = `
  subtitle_text 
  paragraph-2
  max-w-3xl
  font-secondary
`

const Subtitle = ({ subtitle_text }: { subtitle_text: string }) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      <p
        className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}
      >
        {subtitle_text}
      </p>
    </div>
  )
}

export default Subtitle
