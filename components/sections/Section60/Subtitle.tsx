import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
`
const mobileTitleClass = `
  paragraph-3
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
