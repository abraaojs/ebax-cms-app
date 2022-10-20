import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import { TextCardProps } from '../../atomics/TextCard'
import { colors_text } from '../../../utils/colors.object'
import formatMarkdown from '../../../hooks/useMarkdown'

const desktopDivClass = `
  md:grid-cols-3
`
const mobileDivClass = `
  card_area 
  grid 
  grid-cols-1 
  gap-2xl
  m-auto
  max-w-4xl
`
const desktopTitleClass = `
`
const mobileTitleClass = `
  text-[20px]
  md:text-[24px]
  font-secondary
  text-center
  md:text-left
  mb-sm
`
const CardArea = ({
  card_area,
  card_color,
}: {
  card_area: TextCardProps[],
  card_color: string
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      {card_area.map((card: any, i: number) => (
        <div key={i} className={`${colors_text[card_color]}`}>
          <h4 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>{card.title_text}</h4>
          <div className="flex flex-col gap-md text-center md:text-left">
            <p className="paragraph-3">
              {formatMarkdown(card.content_text, {
                bold: `font-bold`,
                italic: 'text-secondary'
              })}</p>
            <p className="paragraph-3">
              {formatMarkdown(card.support_text, {
                bold: `font-bold`,
                italic: 'text-secondary'
              })}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardArea
