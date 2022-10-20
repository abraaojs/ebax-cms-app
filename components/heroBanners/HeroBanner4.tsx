import React from 'react'
import Container from '../atomics/Container'

const HeroBanner4 = ({ blok }: { blok: any }) => {
  return (
    <section className="hero_banner_4 bg-base -mb-sct relative rounded-b-sct flex flex-col mb:flex-row">
      <Container paddingX='px-5xl'>
        <div className="md:grid md:grid-cols-2 pt-5xl pb-xl">
          <div className="md:pr-[152px] flex flex-col justify-center">
            <h1 className="title-1 md:max-w-5xl">
              {blok.title_text}
            </h1>
            <p className="paragraph-2 font-bold font-secondary py-md">{blok.subtitle_text}</p>
            <p className="text-[14px] font-secondary mb-lg">{blok.support_text}</p>
          </div>
          <div className="flex flex-row w-full">
            {blok.banner_images.map((image: any, index: number) => (
              <div style={{
                backgroundImage: `url(${image.filename})`
              }}
                className={`image relative bg-left rounded-sct h-[248px] md:h-[411px] bg-cover ${index == 0 ? 'w-8/12 mr-md' : 'w-4/12'}`} key={index} />
            ))}
          </div>
        </div>
      </Container>
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
    </section>
  )
}

export default HeroBanner4
