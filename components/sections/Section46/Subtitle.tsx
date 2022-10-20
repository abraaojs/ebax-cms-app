import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
`
const mobileDivClass = `
  justify-center
  flex
`
const desktopSubtitleClass = `
`
const mobileSubtitleClass = `
  text-center 
  title_text 
  title-4 
  max-w-xl
  font-secondary
`

const Subtitle = ({ title_text }: { title_text: string }) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      <h4
        className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}
      >
        {title_text}
      </h4>
    </div>
  )
}

export default Subtitle
