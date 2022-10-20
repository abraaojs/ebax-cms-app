import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `

`
const mobileTitleClass = `
  subtitle2_text 
  paragraph-2 
  self-center
  text-center
  max-w-3xl 
`

const Subtitle2 = ({
  subtitle2_text,
}: {
  subtitle2_text: string
}) => {
  return (
    <p className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {formatMarkdown(subtitle2_text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default Subtitle2
