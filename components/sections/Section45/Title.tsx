import React from 'react'
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
  title_text 
  text-center 
  title-2 
  max-w-xl
`

const Title = ({ title_text, title_font_topol }: { title_text: string, title_font_topol: boolean }) => {
  return (
    <div className={`${mergeClassString(mobileDivClass, desktopDivClass)} ${title_font_topol ? 'font-primary' : 'font-secondary'}`}>
      <h2 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
        {title_text}
      </h2>
    </div>
  )
}

export default Title
