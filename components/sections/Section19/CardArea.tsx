import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import EventCard, { TypeEventCard } from '../../atomics/EventCard1'

const mobileCardAreaClass = `
  md:mt-xl 
  md:mx-0 
  md:w-4/12
`
const desktopCardAreaClass = `
  card_area 
  mt-[-15%] 
  mx-lg
`
const mobileEventCardClass = `
  md:mb-0
`
const desktopEventCardClass = `
  min-h-[189px]
  mb-lg
`

const CardArea = ({
  card_area,
}: {
  card_area: TypeEventCard[]
}) => {
  return (
    <div
      className={mergeClassString(mobileCardAreaClass, desktopCardAreaClass)}
      style={{
        zIndex: 1
      }}>
      {card_area.map((card: any, i: number) => (
        <EventCard
          key={i}
          blok={card}
          className={mergeClassString(mobileEventCardClass, desktopEventCardClass)}
        />
      ))}
    </div>
  )
}

export default CardArea
