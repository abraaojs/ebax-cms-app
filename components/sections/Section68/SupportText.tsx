import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSubtitleClass = `
md:text-center
`
const mobileSubtitleClass = `
support_text
paragraph-3
font-secondary
font-bold
mb-sm
`

const SupportText = ({ support_text }: { support_text: string }) => {
  return (
    <h3 className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}>
      {support_text}
    </h3>
  )
}

export default SupportText
