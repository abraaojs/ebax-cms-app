import React from 'react'
import BreadcrumbArea, { BreadcrumbAreaProps } from './BreadcrumbArea'
import TagEventArea from './TagEventArea'

type BackgroundImage = {
  filename: string,
}

type HeroBanner5Props = {
  title_text: string,
  subtitle_text: string,
  tag_event_area: any[],
  background_image: BackgroundImage,
  breadcrumb_area: BreadcrumbAreaProps[]
}

const HeroBanner4 = ({ blok }: { blok: HeroBanner5Props }) => {
  return (
    <section className="hero_banner_5 -mb-sct relative rounded-b-sct flex flex-col items-center text-center bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${blok.background_image.filename})`
      }}>
      <div className="px-lg py-5xl md:py-9xl md:px-5xl md:min-h-[500px] justify-center max-w-[740px]">
        <BreadcrumbArea breadcrumb_area={blok.breadcrumb_area[0]} />
        <TagEventArea tags_event={blok.tag_event_area} />
        <h2 className="title-2 color-base uppercase">
          {blok.title_text}
        </h2>
        <p className="paragraph-2 color-base font-bold font-secondary py-md">{blok.subtitle_text}</p>
      </div>
    </section >
  )
}

export default HeroBanner4
