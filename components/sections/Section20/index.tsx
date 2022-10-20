import { getStoryblokApi } from '@storyblok/react'
import React, { useEffect, useState } from 'react'
import formatClassString from '../../../utils/format.class.string'
import { ButtonFilledProps } from '../../atomics/ButtonFilled'
import { TypeEventCardProps } from '../../atomics/EventCard2'
import ButtonArea from './ButtonArea'
import Container from './Container'
import EventArea from './EventArea'
import Header from './Header'

type Image = {
  filename: string
}

type Section20 = {
  zIndex: number,
  title_text: string,
  subtitle_text: string,
  tag: string,
  image: Image,
  event_area: TypeEventCardProps[],
  background: string,
  button_area: ButtonFilledProps[],
  new_events: boolean,
  tag_events: any[],
  tag_countries: any[],
  tag_events_color: any[],
}

const mobileSectionClass = `
  section_19 
  text-content-light 
  -mb-sct 
  pt-sct 
  relative 
  rounded-b-sct
`

const Section20 = ({ blok }: { blok: Section20 }) => {
  const [events, setEvents] = useState<any[] | undefined>()
  const [eventTypeSelect, setEventTypeSelect] = useState<string>()
  const [countrySelect, setCountrySelect] = useState<string>()
  const dateNow = new Date().toISOString().slice(0, 10)
  const storyblokApi = getStoryblokApi()
  const sbParams = {
    version: import.meta.env.VITE_STORYBLOK_VERSION,
  }

  const getEvents = async () => {
    const urlParams = `by_slugs=*/events/*&token=${import.meta.env.VITE_STORYBLOK_KEY}&is_startpage=0&per_page=6&page=1`
    let filterQuery = ``
    filterQuery += blok.new_events ? `&filter_query[event_date][gt_date]=${dateNow}` : `&filter_query[event_date][lt_date]=${dateNow}`
    filterQuery += eventTypeSelect ? `&filter_query[tag_event_area][in_array]=${eventTypeSelect}` : ``
    filterQuery += countrySelect ? `&filter_query[country_type][in]=${countrySelect}` : ``

    const { data } = await storyblokApi.get(`cdn/stories?${urlParams}${filterQuery}`, sbParams)
    setEvents(data.stories);
  }

  useEffect(() => {
    getEvents()
  }, [eventTypeSelect, countrySelect])
  return (
    <section
      className={formatClassString(mobileSectionClass + ' bg-' + blok.background)}
      style={{ zIndex: -blok.zIndex }}
    >
      <Container>
        <Header
          title={blok.title_text}
          countries={blok.tag_countries}
          eventTypes={blok.tag_events}
          setEventTypeSelect={setEventTypeSelect}
          setCountrySelect={setCountrySelect}
        />
        <EventArea event_area={events} show_image={blok.new_events} tag_events_color={blok.tag_events_color} />
        <ButtonArea button_area={blok.button_area} />
      </Container>
    </section>
  )
}

export default Section20