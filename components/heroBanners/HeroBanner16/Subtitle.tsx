import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
`
const mobileTitleClass = `
subtitle_text paragraph-2 max-w-2xl text-center
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
