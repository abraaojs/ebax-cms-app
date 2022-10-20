import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import HorizontalCard from '../../atomics/HorizontalCard'

const desktopDivClass = `
`
const mobileDivClass = `
  card_area 
  flex 
  flex-col 
  gap-4
`

const CardArea = ({
  card_area,
  className
}: {
  card_area: any[]
  className: string
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      {card_area.map((card: any, i: number) => (
        <HorizontalCard
          key={i}
          blok={card}
          className={className}
        />
      ))}
    </div>
  )
}

export default CardArea
