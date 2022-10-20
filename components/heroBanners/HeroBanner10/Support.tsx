import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSupportClass = `
  md:max-w-[320px]
`
const mobileSupportClass = `
  paragraph-2 
  font-secondary
`

const Support = ({
  support_text,
}: {
  support_text: string
}) => {
  return (
    <p className={mergeClassString(mobileSupportClass, desktopSupportClass)}>
      {formatMarkdown(support_text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default Support
