import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_text } from '../../../utils/colors.object'

const desktopSubtitleClass = `
`
const mobileSubtitleClass = `
partners_title
paragraph-4
font-secondary
color-base-1
font-bold
mb-sm
text-center
`

const PartnersTitle = ({ partners_title, }: { partners_title: { text: string, text_color: string, font_family_topol: boolean }[] }) => {
  const color = colors_text[partners_title[0].text_color] ? colors_text[partners_title[0].text_color] : ""
  return (
    <h3 className={`${mergeClassString(mobileSubtitleClass, desktopSubtitleClass)} ${color} ${partners_title[0].font_family_topol ? 'font-primary' : 'font-secondary'}`}>
      {partners_title[0].text}
    </h3>
  )
}

export default PartnersTitle
