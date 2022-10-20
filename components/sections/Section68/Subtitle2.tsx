import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
  md:flex
  md:justify-center
`
const mobileDivClass = `
`
const desktopSubtitle2Class = `
  md:text-center 
`
const mobileSubtitle2Class = `
  subtitle_text_2 
  paragraph-2
  font-bold
  max-w-xl
  font-secondary
`

const Subtitle2 = ({ subtitle_text_2 }: { subtitle_text_2: string }) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      <p
        className={mergeClassString(mobileSubtitle2Class, desktopSubtitle2Class)}
      >
        {subtitle_text_2}
      </p>
    </div>
  )
}

export default Subtitle2
