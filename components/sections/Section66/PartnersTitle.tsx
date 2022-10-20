import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSubtitleClass = `
`
const mobileSubtitleClass = `
partners_title
paragraph-4
font-secondary
font-bold
mb-md
text-center
`

const PartnersTitle = ({ partners_title }: { partners_title: string }) => {
  return (
    <h3 className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}>
      {partners_title}
    </h3>
  )
}

export default PartnersTitle
