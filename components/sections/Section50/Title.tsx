import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_text } from '../../../utils/colors.object'

const desktopDivClass = `
  md:justify-center
`
const mobileDivClass = `
  flex
`
const desktopTitleClass = `
`
const mobileTitleClass = `
  title_text title-2  max-w-3xl text-center
`

const Title = ({ title_text, title_font_topol, bold_color, text_color }: { title_text: string, title_font_topol: boolean, bold_color: string, text_color: string }) => {
  return (
    <div className={`${mergeClassString(mobileDivClass, desktopDivClass)} ${title_font_topol ? 'font-primary' : 'font-secondary'} ${colors_text[text_color]}`} >
      <h2 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
        {formatMarkdown(title_text, {
          bold: `${colors_text[bold_color]}`,
          italic: 'text-secondary'
        })}
      </h2>
    </div >
  )
}

export default Title
