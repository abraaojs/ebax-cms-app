import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import EventCard, { TypeEventCard } from '../../atomics/EventCard1'

const mobileCardAreaClass = `
`
const desktopCardAreaClass = `
  card_area 
`
const mobileEventCardClass = `
`
const desktopEventCardClass = `
`

const EventArea = ({
  event_area,
}: {
  event_area: TypeEventCard[]
}) => {
  return (
    <div
      className={mergeClassString(mobileCardAreaClass, desktopCardAreaClass)}
      style={{
        zIndex: 1
      }}>
      {event_area.map((card: any, i: number) => (
        <EventCard
          key={i}
          blok={card}
          className={mergeClassString(mobileEventCardClass, desktopEventCardClass)}
          buttonClassName="min-w-full"
        />
      ))}
    </div>
  )
}

export default EventArea
