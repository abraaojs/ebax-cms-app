import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `

`
const mobileTitleClass = `
  subtitle1_text 
  paragraph-2 
  self-center
  text-center
  max-w-3xl 
`

const Subtitle1 = ({
  subtitle1_text,
}: {
  subtitle1_text: string
}) => {
  return (
    <p className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {formatMarkdown(subtitle1_text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default Subtitle1
