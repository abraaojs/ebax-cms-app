import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import formatMarkdown from '../../../hooks/useMarkdown'
import { colors_text } from '../../../utils/colors.object'

const desktopTitleClass = `

`
const mobileTitleClass = `
  subtitle_text 
  paragraph-2 
  text-center
  max-w-3xl 
`

const Subtitle = ({
  subtitle_text,
  subtitle_color,
}: {
  subtitle_text: string
  subtitle_color: string
}) => {
  return (
    <p className={`${mergeClassString(mobileTitleClass, desktopTitleClass)} ${colors_text[subtitle_color]}`}>
      {formatMarkdown(subtitle_text, {
        bold: 'font-bold',
        italic: 'font-italic'
      })}
    </p>
  )
}

export default Subtitle
