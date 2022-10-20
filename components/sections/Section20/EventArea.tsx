import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import EventCard, { TypeEventCardProps } from '../../atomics/EventCard2'

const mobileCardAreaClass = `
  card_area
  gap-3.5
  line 
  hide-scrollbar
`
const desktopCardAreaClass = `
  md:mt-xl 
  md:grid 
  md:grid-cols-3
  md:gap-x-6
  md:gap-y-12
`

const EventArea = ({
  event_area,
  show_image,
  tag_events_color,
}: {
  event_area: any[] | undefined,
  show_image?: boolean,
  tag_events_color?: any[],
}) => {
  return (
    <div
      className={mergeClassString(mobileCardAreaClass, desktopCardAreaClass)}
    >
      {event_area && event_area.map((card: any, i: number) => ([
        <EventCard
          blok={{ ...card.content, show_image, tag_events_color }}
          key={i}
        />]
      ))}
    </div>
  )
}

export default EventArea
