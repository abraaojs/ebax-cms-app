import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = ``
const mobileTitleClass = `
  paragraph-4 
  text-center
`

const SupportText = ({
  support_text,
}: {
  support_text: string
}) => {
  return (
    <p className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {formatMarkdown(support_text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default SupportText
