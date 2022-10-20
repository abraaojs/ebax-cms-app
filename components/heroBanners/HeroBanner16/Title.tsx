import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
  md:max-w-6xl
`
const mobileTitleClass = `
  title_text 
  title-2
  text-center
  max-w-lg 
  uppercase
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
