import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_text } from '../../../utils/colors.object'
const mobileTitleClass = `
  title-1
  uppercase 
  color-base-1
  mb-lg
  text-center
`

const desktopTitleClass = `
  md:max-w-5xl
  md:text-left
`

const Title = ({ title, title_color }: { title: string, title_color: string }) => {
  const color = colors_text[title_color] ? colors_text[title_color] : ''
  return (
    <h1 className={`${mergeClassString(mobileTitleClass, desktopTitleClass)} ${color} `}>
      {title}
    </h1>
  )
}

export default Title
