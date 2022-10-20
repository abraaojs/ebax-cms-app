import React from 'react'
import formatClassString from '../../utils/format.class.string'
import mergeClassString from '../../utils/merge.class.string'
import TagEventArea from '../sections/Section20/TagEventArea'
import ButtonClear, { ButtonClearProps } from './ButtonClear'

type EventImage = {
  filename: string
}

export type TypeEventCardProps = {
  title_text: string,
  content_text: string,
  event_image: EventImage,
  button_area: ButtonClearProps[],
  country_type: string,
  tag_event_area: string[],
  event_date: string,
  background_color: string,
  show_image?: boolean,
  tag_events_color: any[]
}

const desktopCardDivClass = `
`

const desktopTitleClass = `title-5 font-secondary`

const desktopParagraphClass = `paragraph-3`
const EventCard2 = ({
  blok
}: {
  blok: TypeEventCardProps
}) => {
  const mobileCardDivClass = `
    text_card
    bg-base
    rounded-xs
    relative
    min-w-[360px]
    bg-${blok.background_color}
  `
  const date = new Date(blok.event_date);
  const month = date.toLocaleString('en-us', { month: 'long' })
  const day = date.getDate()
  return (
    <div className={mergeClassString(mobileCardDivClass, desktopCardDivClass)}>
      <div className="flex items-center justify-center">
        {(blok.event_image.filename && blok.show_image) && (
          <img src={blok.event_image.filename} className="w-full rounded-t-xs" />
        )}
        {!blok.event_image?.filename && (
          <div className="w-full rounded-t-xs h-[50px]" />
        )}
        <div className="flex paragraph-2 font-secondary text-content-light capitalize justify-between absolute bg-base top-0 w-[95%] rounded-xs mt-md p-sm">
          <div className="font-bold">
            {blok.country_type && <img src={`/flags/${blok.country_type}.svg`} className="w-[16px] mr-sm" />}
            {blok.country_type}
          </div>
          <div>
            <span className="font-bold">{day}</span> {month}
          </div>
        </div>
      </div>
      <div className={`px-md pb-xl ${!blok.show_image && 'mt-4xl'}`}>
        {blok.tag_event_area.length > 0 ?
          <TagEventArea tags_event={blok.tag_event_area} tag_events_color={blok.tag_events_color} />
          : <div className="mt-md" />}

        <div className="flex flex-col gap-md">
          <h4 className={formatClassString(desktopTitleClass)}>{blok.title_text}</h4>
          <p className={formatClassString(desktopParagraphClass)}>{blok.content_text}</p>

          <div className="button_area">
            {blok.button_area.map((button: any, i: number) => (
              <ButtonClear key={i} blok={button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard2
