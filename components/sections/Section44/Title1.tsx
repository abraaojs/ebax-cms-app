import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_text } from '../../../utils/colors.object'
import formatMarkdown from '../../../hooks/useMarkdown'

const desktopTitleClass = `
`
const mobileTitleClass = `
  title-5 
  font-bold
  max-w-2xl
  font-secondary
  text-center
`

const Title1 = ({
  title_1,
  title_1_text_color,
}: {
  title_1: string,
  title_1_text_color: string
}) => {
  return (
    <div className="flex flex-col items-center">
      <h5 className={`${mergeClassString(mobileTitleClass, desktopTitleClass)} ${colors_text[title_1_text_color]}`}>
        {formatMarkdown(title_1, {
          bold: 'font-bold',
          italic: 'font-italic'
        })}
      </h5>
    </div>
  )
}

export default Title1
