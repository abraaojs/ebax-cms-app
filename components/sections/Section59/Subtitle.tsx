import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
  md:text-center
`
const mobileTitleClass = `
  subtitle_text 
  paragraph-2 
  font-bold
  max-w-3xl 
`

const Subtitle = ({
  subtitle_text,
}: {
  subtitle_text: string
}) => {
  return (
    <p className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {subtitle_text}
    </p>
  )
}

export default Subtitle
