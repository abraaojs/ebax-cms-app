import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
`
const mobileTitleClass = `
  title_text 
  title-2 
  max-w-lg
`

const Title = ({
  title_text,
}: {
  title_text: string
}) => {
  return (
    <h2 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {formatMarkdown(title_text, {
        bold: 'text-primary',
        italic: 'text-secondary'
      })}
    </h2>
  )
}

export default Title
