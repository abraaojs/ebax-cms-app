import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import formatMarkdown from '../../../hooks/useMarkdown'

const desktopPixTextClass = `
  md:max-w-250
`
const mobilePixTextClass = `
  paragraph-1
  font-secondary
  text-center
  self-center	
`

const PixText = ({ pix_text }: { pix_text: string }) => {
  return (
    <p className={mergeClassString(mobilePixTextClass, desktopPixTextClass)}>
      {formatMarkdown(pix_text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default PixText
