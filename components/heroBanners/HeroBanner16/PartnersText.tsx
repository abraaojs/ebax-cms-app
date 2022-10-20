import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTextClass = `
`
const mobileTextClass = `
partners_text
paragraph-4
font-secondary
font-bold
text-center
`

const PartnersText = ({ partners_text }: { partners_text: string }) => {
  return (
    <h3 className={mergeClassString(mobileTextClass, desktopTextClass)}>
      {partners_text}
    </h3>
  )
}

export default PartnersText
