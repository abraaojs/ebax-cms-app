import React from 'react'
import ButtonFilled from '../atomics/ButtonFilled'

const HeroBanner2 = ({ blok }: { blok: any }) => {
  const hasIcon = blok.icon_type || false
  return (
    <section className="hero_banner_2 bg-base-3 -mb-sct relative rounded-b-sct flex flex-col mb:flex-row">
      <div className="md:grid md:grid-cols-[1fr_1fr] gap-6">
        <div className="px-lg pt-5xl">
          {hasIcon && (
            <img
              className="icon_type mb-md md:mb-xl w-[40px] md:w-[74px]"
              src={blok.icon_type.filename}
              alt={blok.icon_type.alt}
              key={blok.icon_type.id}
            />
          )}

          <div className="flex flex-row gap-4 items-center mb-md">
            <img
              className="w-[24px]"
              src={`/icons/${blok.icon_type}.svg`}
              alt={blok.icon_type}
            />
            <h3 className="title-4 font-secondary color-base-1">
              {blok.icon_text}
            </h3>
          </div>

          <h4 className="title-4 font-secondary color-base-1 md:max-w-5xl">
            {blok.title_text}
          </h4>

          <div className="button_area flex my-xl">
            {blok.button_area.map((button: any, i: number) => (
              <ButtonFilled key={i} blok={button} />
            ))}
          </div>
          <p className="paragraph-2 font-secondary color-base-2 mb-3xl">{blok.subtitle_text}</p>
          <h3 className="partners_title paragraph-4 font-secondary color-base-1 font-bold mb-sm">
            {blok.partners_title}
          </h3>
          <div className="partner_logos flex items-center gap-lg line hide-scrollbar">
            {blok.partners_logos.map((logoProps: any) => (
              <img
                src={logoProps.filename}
                alt={logoProps.alt}
                key={logoProps.id}
              />
            ))}
          </div>

        </div>
        <div
          className="image h-[340px] md:h-[602px] relative bg-cover mt-xl rounded-b-sct md:rounded-br-sct md:rounded-bl-[0] md:mt-[0]"
          style={{
            backgroundImage: `url(${blok.background_image.filename})`
          }}>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner2
