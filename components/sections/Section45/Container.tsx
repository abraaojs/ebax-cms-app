import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_bg, colors_text } from '../../../utils/colors.object'

const mobileSectionClass = `
  section_45 
  text-content-light 
  -mb-sct 
  pt-sct 
  relative 
  rounded-b-sct
`
const desktopSectionClass = `
`

const mobileDivClass = `
  flex 
  flex-col 
  gap-lg 
  py-5xl 
  px-lg 
`

const desktopDivClass = `
  md:gap-8 
  md:py-9xl 
  md:px-5xl
`

const Container = ({
  children,
  zIndex,
  background_color,
  text_color
}: {
  children: ReactElement[]
  zIndex: number
  background_color: string
  text_color: string
}) => {
  return (
    <section
      className={`${mergeClassString(mobileSectionClass, desktopSectionClass)} ${colors_bg[background_color]} ${colors_text[text_color]}`}
      style={{ zIndex: -zIndex }}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
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
    </section>
  )
}

export default Container
