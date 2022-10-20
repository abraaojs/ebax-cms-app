import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopPageTitleClass = `
  md:max-w-6xl
`
const mobilePageTitleClass = `
  page_title 
  self-center
  title-5
  text-center
  max-w-lg 
`

const PageTitle = ({
  page_title,
}: {
  page_title: string
}) => {
  return (
    <h2 className={mergeClassString(mobilePageTitleClass, desktopPageTitleClass)}>
      {formatMarkdown(page_title, {
        bold: 'text-primary',
        italic: 'text-secondary'
      })}
    </h2>
  )
}

export default PageTitle
