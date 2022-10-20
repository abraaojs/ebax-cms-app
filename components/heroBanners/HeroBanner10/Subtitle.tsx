import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSubtitleClass = `
`
const mobileSubtitleClass = `
  color-base-1 
  title-5 
  font-secondary
`

const Subtitle = ({
  subtitle_text,
}: {
  subtitle_text: string
}) => {
  return (
    <h5 className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}>
      {subtitle_text}
    </h5>
  )
}

export default Subtitle
