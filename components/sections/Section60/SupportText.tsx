import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = ``
const mobileTitleClass = `
  paragraph-3 
  font-bold
`

const SupportText = ({
  support_text,
}: {
  support_text: string
}) => {
  return (
    <p className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {support_text}
    </p>
  )
}

export default SupportText
