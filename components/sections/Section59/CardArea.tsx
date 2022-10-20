import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import TextCard, { TextCardProps } from '../../atomics/TextCard'

const desktopDivClass = `
  md:grid-cols-4
`
const mobileDivClass = `
  card_area 
  grid 
  grid-cols-1 
  gap-2xl
`

const CardArea = ({
  card_area,
}: {
  card_area: TextCardProps[]
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      {card_area.map((card: any, i: number) => (
        <TextCard blok={card} key={i} contentTextClass="mt-lg" />
      ))}
    </div>
  )
}

export default CardArea
