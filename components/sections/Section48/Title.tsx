import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_text } from '../../../utils/colors.object'

const desktopDivClass = `
`
const mobileDivClass = `
  justify-center
  flex
`
const desktopTitleClass = `
`
const mobileTitleClass = `
  justify-center
  text-center
  title_text 
  title-2 
  max-w-3xl
`

const Title = ({
  title_text,
  bold_color,
  title_font_topol,
}: {
  title_text: string
  bold_color: string
  title_font_topol: boolean
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      <h2 className={`${mergeClassString(mobileTitleClass, desktopTitleClass)} ${title_font_topol ? 'font-primary' : 'font-secondary'}`}>
        {formatMarkdown(title_text, {
          bold: `${colors_text[bold_color]}`,
          italic: 'text-secondary'
        })}
      </h2>
    </div>
  )
}

export default Title
