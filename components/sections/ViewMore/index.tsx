import { getStoryblokApi } from '@storyblok/react'
import React, { useEffect, useState } from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import formatClassString from '../../../utils/format.class.string'
import BreadcrumbArea, { BreadcrumbAreaProps } from '../../heroBanners/HeroBanner5/BreadcrumbArea'
import EventArea from './EventArea'

const desktopTitleClass = `
  title-3 
  color-base-3
  uppercase 
`

type viewMoreType = {
  zIndex: number,
  title_text: string,
  button_area: any[],
  per_page: number,
  breadcrumb_area: BreadcrumbAreaProps[],
  tag_events: any[],
  tag_countries: any[],
  tag_events_color: any[],
}

const buttonBase = `bg-primary hover:bg-primary-focus cursor-pointer uppercase py-md px-lg 
rounded-btn w-full md:w-auto text-center text-content-dark max-w-md font-bold flex`
const ViewMore = ({ blok }: { blok: viewMoreType }) => {
  const [events, setEvents] = useState<any[] | undefined>()
  const [eventTypeSelect, setEventTypeSelect] = useState<string>()
  const [countrySelect, setCountrySelect] = useState<string>()
  const [perPage, setPerPage] = useState<number>(blok.per_page)
  const [loading, setLoading] = useState<boolean>(false)
  const storyblokApi = getStoryblokApi()
  const sbParams = {
    version: import.meta.env.VITE_STORYBLOK_VERSION,
  }

  const getEvents = async () => {
    setLoading(true)
    const urlParams = `by_slugs=*/events/*&token=${import.meta.env.VITE_STORYBLOK_KEY}&is_startpage=0&per_page=${perPage}`
    let filterQuery = ``
    filterQuery += eventTypeSelect ? `&filter_query[tag_event_area][in_array]=${eventTypeSelect}` : ``
    filterQuery += countrySelect ? `&filter_query[country_type][in]=${countrySelect}` : ``

    const { data } = await storyblokApi.get(`cdn/stories?${urlParams}${filterQuery}`, sbParams)
    setEvents(data.stories);
    setLoading(false)
  }

  useEffect(() => {
    getEvents()
  }, [eventTypeSelect, countrySelect, perPage])
  return (
    <section
      className="section_18 bg-base-1 text-content-light -mb-sct pt-sct relative rounded-b-sct"
      style={{ zIndex: -blok.zIndex }}
    >
      <div className="flex flex-col gap-lg md:gap-mb pt-xl pb-9xl px-lg md:px-5xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col">

            <a href={blok.breadcrumb_area[0]?.link ? blok.breadcrumb_area[0].link.url : '#'} className="color-base-3 flex aligm-center gap-sm mb-sm text-[14px] font-bold">
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="15" height="15" rx="7.5" transform="matrix(1 8.74228e-08 8.74228e-08 -1 0 15.8262)" fill="#0051FF" />
                <path d="M9.03673 11.3999L5.96289 8.32606L9.03673 5.25222" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              {blok.breadcrumb_area[0].text}
            </a>
            <h3 className={formatClassString(desktopTitleClass)}>
              {formatMarkdown(blok.title_text, {
                bold: 'text-primary',
                italic: 'text-secondary'
              })}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-2xl md:mb-0">
            <div className="flex flex-col gap-2 w-[300px]">
              <label className="md:font-bold paragraph-3">Event Type</label>
              <select className="select-input" onChange={e => setEventTypeSelect(e.target.value)}>
                <option value="">Select an item</option>
                {blok.tag_events?.map((eventType) => (
                  <option value={eventType.value}>{eventType.value}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 w-[300px]">
              <label className="md:font-bold paragraph-3">Country</label>
              <select className="select-input" onChange={e => setCountrySelect(e.target.value)}>
                <option value="">Select an item</option>
                {blok.tag_countries?.map((country) => (
                  <option value={country.value}>{country.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <EventArea event_area={events} show_image={true} tag_events_color={blok.tag_events_color} />
        <div
          className="flex justify-center">
          {blok.button_area.map((button: any, i: number) => (
            <a
              className={buttonBase}
              style={{ pointerEvents: loading ? 'none' : 'auto' }}
              onClick={() => !loading && setPerPage(Number(perPage) + Number(blok.per_page))}
            >
              {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  )

}


export default ViewMore
