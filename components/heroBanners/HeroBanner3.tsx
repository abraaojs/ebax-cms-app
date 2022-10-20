import React from 'react'

const HeroBanner3 = ({ blok }: { blok: any }) => {
  return (
    <section className="hero_banner_3 bg-primary-extradark -mb-sct relative rounded-b-sct flex flex-col mb:flex-row border-b-10 border-primary-focus">
      <div className="px-lg py-5xl md:px-5xl md:py-9xl">
        {blok.link_label && (
          <a href={blok.link_url?.url ? blok.link_url?.url : '#'} className="color-base-1 flex aligm-center gap-sm mb-lg text-[14px] font-bold">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.109375" y="0.309692" width="16" height="16" rx="8" fill="white" />
              <path d="M10.3062 5.59525C10.5525 5.37974 10.5775 5.00538 10.362 4.75908C10.1465 4.51279 9.7721 4.48783 9.52581 4.70334L10.3062 5.59525ZM6.30416 8.30966L5.91395 7.86371C5.78536 7.97623 5.71159 8.13879 5.71159 8.30966C5.71159 8.48054 5.78536 8.6431 5.91395 8.75562L6.30416 8.30966ZM9.52581 11.916C9.7721 12.1315 10.1465 12.1065 10.362 11.8602C10.5775 11.614 10.5525 11.2396 10.3062 11.0241L9.52581 11.916ZM9.52581 4.70334L5.91395 7.86371L6.69437 8.75562L10.3062 5.59525L9.52581 4.70334ZM5.91395 8.75562L9.52581 11.916L10.3062 11.0241L6.69437 7.86371L5.91395 8.75562Z" fill="#001F60" />
            </svg>
            {blok.link_label}
          </a>
        )}
        <h2 className="title-2 uppercase color-base-1 md:max-w-5xl">
          {blok.title_text}
        </h2>
        {blok.subtitle_text && (
          <p className="color-base-1 paragraph-1 md:max-w-[300px]">
            {blok.subtitle_text}
          </p>
        )}
      </div>
    </section>
  )
}

export default HeroBanner3
