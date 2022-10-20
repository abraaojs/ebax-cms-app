import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import ImageCard from '../../atomics/ImageCardFlex'

const desktopDivClass = `
  md:flex-row 
`
const mobileDivClass = `
  card_area 
  flex 
  flex-col 
  gap-lg
`
const desktopCardClass = `
  md:min-w-0
`
const mobileCardClass = `
  min-w-[296px]
`

const CardArea = ({
  card_area,
  card_text_color,
  card_background_color,
}: {
  card_area: any
  card_text_color: string
  card_background_color: string
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      {card_area.map((card: any, i: number) => (
        <ImageCard card_background_color={card_background_color} card_text_color={card_text_color} key={i} blok={card} className={mergeClassString(mobileCardClass, desktopCardClass)} />
      ))}
    </div>
  )
}

export default CardArea
