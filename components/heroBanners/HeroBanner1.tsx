import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import Container from "../atomics/Container"

const HeroBannerA = ({ blok }: { blok: any }) => {
  const hasIcon = blok.icon_type || false
  return (
    <section className="hero_banner_1 bg-base -mb-sct relative pt-5xl pb-xl rounded-b-sct">
      <Container paddingX='px-lg  flex flex-col items-center'>
        {hasIcon && (
          <img
            className="icon_type mb-md md:mb-xl w-[40px] md:w-[74px]"
            src={blok.icon_type.filename}
            alt={blok.icon_type.alt}
            key={blok.icon_type.id}
          />
        )}
        <h1 className="title_text font-primary text-center max-w-lg md:max-w-5xl mb-7xl title-1">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h1>
        <h3 className="partners_title paragraph-4 font-secondary font-bold mb-sm">
          {blok.partners_title}
        </h3>
        <div className="partner_logos flex gap-lg justify-start max-w-full line hide-scrollbar">
          {blok.partners_logos.map((logoProps: any) => (
            <img
              src={logoProps.filename}
              alt={logoProps.alt}
              key={logoProps.id}
            />
          ))}
        </div>

        <div className="notch absolute bottom-[2px] translate-y-[100%] w-full flex justify-between">
          <div className="w-radius-primary aspect-square"></div>
          <svg
            viewBox="0 0 167 30"
            className="fill-white h-full max-h-[30px] aspect-[167/30]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M57.26.8c32.27-.02 72-.04 101.3-.04C149.8 2.63 136 7.4 121.1 17.1c-12.46 8.14-23.93 11.92-35.12 11.79-11.18-.14-22.12-4.18-33.53-11.78-11.3-7.54-20.5-11.87-28.65-14.3a68.46 68.46 0 0 0-8.66-2L57.26.79Z" />
          </svg>
          <div className="w-radius-primary aspect-square"></div>
        </div>
      </Container>
    </section>
  )
}

export default HeroBannerA
