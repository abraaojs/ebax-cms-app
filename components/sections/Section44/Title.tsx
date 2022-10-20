import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_text } from '../../../utils/colors.object'

const desktopTitleClass = `
  md:max-w-2xl 
`
const mobileTitleClass = `
  title_text 
  font-primary 
  title-2
  text-center
`

const Title = ({
  title_text,
  title_text_color,
  bold_title_color,
  title_text_topol,
}: {
  title_text: string,
  title_text_color: string,
  bold_title_color: string,
  title_text_topol: boolean,
}) => {
  return (
    <h2 className={`${mergeClassString(mobileTitleClass, desktopTitleClass)} ${colors_text[title_text_color]} ${title_text_topol ? "font-primary" : "font-secondary"}`}>
      {formatMarkdown(title_text, {
        bold: `${colors_text[bold_title_color]}`,
        italic: 'text-secondary'
      })}
    </h2>
  )
}

export default Title
