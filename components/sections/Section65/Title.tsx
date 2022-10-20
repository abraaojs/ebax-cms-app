import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
`
const mobileDivClass = `
  justify-center
  flex
`
const desktopTitleClass = `
`
const mobileTitleClass = `
  justify-center
  text-center
  uppercase
  title_text 
  title-2 
  max-w-3xl
`

const Title = ({
  title_text,
}: {
  title_text: string
}) => {
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
