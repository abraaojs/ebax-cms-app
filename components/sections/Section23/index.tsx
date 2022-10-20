import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'
import { CollapseType } from '../../atomics/Collapse'
import { TypeEventCard } from '../../atomics/EventCard1'
import CollapseArea from './CollapseArea'
import EventArea from './EventArea'
import './style.scss'
import Container from '../../atomics/Container'

type Section23 = {
  zIndex: number,
  content: any,
  collapse_area: CollapseType[],
  sidebar_area: TypeEventCard[]
}

const Section23 = ({ blok }: any) => {
  return (
    <section
      className="section_5 bg-base text-content-light -mb-sct pt-sct relative rounded-b-sct"
      style={{ zIndex: -blok.zIndex }}
    >
      <Container paddingX='md:px-5xl px-lg '>
        <div className="flex flex-col md:flex-row md:flex-row-reverse pt-7xl pb-5xlmd:pt-12xl md:pb-9xl md:gap-lg">
          <div className="flex flex-col md:w-3/12 mb-2xl">
            <EventArea event_area={blok.sidebar_area} />
          </div>
          <div className="flex flex-col md:w-9/12 content gap-12">
            {render(blok.content)}
            <CollapseArea collapse_area={blok.collapse_area} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Section23
