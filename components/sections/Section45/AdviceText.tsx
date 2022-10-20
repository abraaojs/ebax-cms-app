import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import formatMarkdown from '../../../hooks/useMarkdown'

const desktopAdviceTextClass = `
`
const mobileAdviceTextClass = `
  paragraph-1
  font-secondary
  text-center
  self-center	
`

const AdviceText = ({ advice_text }: { advice_text: string }) => {
  return (
    <p
      className={mergeClassString(
        mobileAdviceTextClass,
        desktopAdviceTextClass
      )}
    >
      {formatMarkdown(advice_text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default AdviceText
