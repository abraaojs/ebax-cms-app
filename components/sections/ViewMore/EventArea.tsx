import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import EventCard, { TypeEventCardProps } from '../../atomics/EventCard2'

const mobileCardAreaClass = `
  card_area
  grid 
  grid-cols-1
  gap-x-6
  gap-y-12
`
const desktopCardAreaClass = `
  md:mt-xl 
  md:grid-cols-3
`

const EventArea = ({
  event_area,
  show_image,
  tag_events_color,
}: {
  event_area: any[] | undefined,
  show_image?: boolean
  tag_events_color?: any[],
}) => {
  return (
    <div
      className={mergeClassString(mobileCardAreaClass, desktopCardAreaClass)}
    >
      {event_area && event_area.map((card: any, i: number) => ([
        <EventCard
          blok={{ ...card.content, show_image, tag_events_color, ...{ background_color: 'base1' } }}
        />]
      ))}
    </div>
  )
}

export default EventArea
