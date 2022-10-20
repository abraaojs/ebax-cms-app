import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import formatMarkdown from '../../../hooks/useMarkdown'
import { colors_text } from '../../../utils/colors.object'

const mobileSubtitleClass = `
  color-base-1 
  font-secondary
  text-center
  mb-lg
  title-3
  md:max-w-[80%]
`

const desktopSubtitleClass = `
md:text-left
`

const Subtitle = ({ subtitle_text, text_color, font_family_topol, bold_color }: { subtitle_text: string, text_color: string, font_family_topol: boolean, bold_color: string }) => {
  const color = colors_text[text_color] ? colors_text[text_color] : ''
  const colorBold = colors_text[bold_color] ? colors_text[bold_color] : ''
  return (
    <h3 className={`${mergeClassString(mobileSubtitleClass, desktopSubtitleClass)} ${color} ${font_family_topol ? 'font-primary' : 'font-secondary'}`}>
      {formatMarkdown(subtitle_text, {
        bold: `${colorBold}`,
        italic: 'text-secondary'
      })}
    </h3>
  )
}

export default Subtitle
