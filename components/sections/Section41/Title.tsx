import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import formatClassString from '../../../utils/format.class.string'

const desktopTitleClass = `
  title-3 
  color-base-3
  uppercase 
  text-center
`

const Title = ({
  title,
}: {
  title: string
}) => {
  return (
    <h3 className={formatClassString(desktopTitleClass)}>
      {formatMarkdown(title, {
        bold: 'text-primary',
        italic: 'text-secondary'
      })}
    </h3>
  )
}

export default Title
