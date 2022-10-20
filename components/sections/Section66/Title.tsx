import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const mobileTitleClass = `
  title-2
  uppercase 
  mb-md
  md:text-center
`

const desktopTitleClass = `
  md:max-w-5xl
  md:text-left
  md:mb-lg
`

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {formatMarkdown(title, {
        bold: 'text-primary',
        italic: 'text-secondary'
      })}
    </h1>
  )
}

export default Title
