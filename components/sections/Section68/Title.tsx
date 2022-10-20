import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
md:justify-center
md:flex
`
const mobileDivClass = `
`
const desktopTitleClass = `
  md:text-center 
`
const mobileTitleClass = `
  title_text 
  title-2 
  max-w-xl
`

const Title = ({ title_text }: { title_text: string }) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      <h2 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
        {formatMarkdown(title_text, {
          bold: 'text-primary',
          italic: 'text-secondary'
        })}
      </h2>
    </div>
  )
}

export default Title
