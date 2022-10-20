import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import ButtonFilled, { ButtonFilledProps } from '../../atomics/ButtonFilled'
import ButtonArea from './ButtonArea'
import Container from './Container'

type HeroBanner14Props = {
  title_text: string,
  subtitle_text: string,
  support_text: string,
  button_area: ButtonFilledProps[],
  banner_images: {
    filename: string
  }[]
}
/**
 * Render the hero-banner-14 component.
 * @see {@link https://www.figma.com/file/1kVGH77Cj6xgtOi3HcIq05/EBANX-%7C-Foundation?node-id=2493%3A19181} for the Figma reference.
 * @see {@linkcode https://github.com/GaugeBrasil/ebax-cms/blob/main/theme.config.ts} for the theme configuration reference.
 * @return {ReactElement}      The HeroBanner14 element
 */
const HeroBanner14 = ({ blok }: { blok: HeroBanner14Props }) => {
  return (
    <Container>
      <div className="md:grid md:grid-cols-2 pt-3xl pb-3xl px-lg md:px-5x2 max-w-[1366px] mx-auto">
        <div className="md:pr-[152px] flex flex-col justify-center gap-md md:gap-lg">
          <h2 className="title-2 md:max-w-5xl">
            {formatMarkdown(blok.title_text, {
              bold: 'text-primary',
              italic: 'text-secondary'
            })}
          </h2>
          <p className="paragraph-2 font-bold font-secondary">{blok.subtitle_text}</p>
          <p className="paragraph-2 font-secondary md:pb-0 pb-md">{blok.support_text}</p>
          <div className="button_area md:flex display-none">
            {blok.button_area.map((button: any, i: number) => (
              <ButtonFilled
                key={i}
                blok={button}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row w-full">
          {blok.banner_images.map((image: any, index: number) => (
            <div style={{
              backgroundImage: `url(${image.filename})`
            }}
              className={`image relative bg-left rounded-sm h-[248px] md:h-[411px] bg-cover ${index == 0 ? 'w-8/12 mr-md' : 'w-4/12'}`} key={index} />
          ))}
        </div>
        <ButtonArea button_area={blok.button_area} />
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
  )
}

export default HeroBanner14
