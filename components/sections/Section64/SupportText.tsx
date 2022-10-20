import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `md:max-w-3xl`
const mobileTitleClass = `
  paragraph-1 
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
