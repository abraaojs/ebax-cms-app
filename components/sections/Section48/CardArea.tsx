import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import ImageCard from '../../atomics/ImageCard'
import TextCard from '../../atomics/TextCard'

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
`
const mobileCardClass = `
  min-h-[189px] 
  mb-lg
`

const CardArea = ({
  card_area,
}: {
  card_area: any
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      {card_area.map((card: any, i: number) => (
        <TextCard key={i} blok={card} className={mergeClassString(mobileCardClass, desktopCardClass)} contentTextClass='pt-md font-secondary paragraph-8' />
      ))}
    </div>
  )
}

export default CardArea
