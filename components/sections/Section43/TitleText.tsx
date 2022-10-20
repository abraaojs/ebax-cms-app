import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_text } from '../../../utils/colors.object'

const desktopTitleClass = `
md:text-left
`
const mobileTitleClass = `
 justify-center title-2 max-w-lg mb-xl
`

const TitleText = ({ title_text }: { title_text: any }) => {
  const colorBold = colors_text[title_text[0].bold_color] ? colors_text[title_text[0].bold_color] : ''
  return (
    <div>
      <h2
        className={`${mergeClassString(mobileTitleClass, desktopTitleClass)} ${colors_text[title_text[0].text_color]} ${title_text[0].font_family_topol ? 'font-primary' : 'font-secondary'}`}
      >
        {formatMarkdown(title_text[0].text, {
          bold: `${colorBold}`,
          italic: 'text-secondary'
        })}
      </h2>
    </div>
  )
}

export default TitleText
