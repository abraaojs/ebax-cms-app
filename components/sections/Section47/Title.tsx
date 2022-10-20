import React from 'react'
import { colors_text } from '../../../utils/colors.object'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
  md:justify-center
`
const mobileDivClass = `
  flex
`
const desktopTitleClass = `
  md:text-center
`
const mobileTitleClass = `
  title_text 
  title-2
  color-base 
  max-w-3xl
`

const Title = ({
  title_text,
  title_color,
  title_font_topol,
}: {
  title_text: string
  title_color: string
  title_font_topol: boolean
}) => {
  return (
    <div className={`${mergeClassString(mobileDivClass, desktopDivClass)}`}>
      <h2 className={`${mergeClassString(mobileTitleClass, desktopTitleClass)} ${colors_text[title_color]} ${title_font_topol ? 'font-primary' : 'font-secondary'}`}>
        {title_text}
      </h2>
    </div>
  )
}

export default Title
