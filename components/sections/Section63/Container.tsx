import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'


const colors_bg: any = {
  'primary': 'bg-primary',
  'primary-focus': 'bg-primary-focus',
  'primary-light': 'bg-primary-light',
  'primary-extralight': 'bg-primary-extralight',
  'primary-dark': 'bg-primary-dark',
  'primary-extradark': 'bg-primary-extradark',
  'secondary': 'bg-secondary',
  'secondary-focus': 'bg-secondary-focus',
  'secondary-light': 'bg-secondary-light',
  'secondary-extralight': 'bg-secondary-extralight',
  'secondary-dark': 'bg-secondary-dark',
  'secondary-extradark': 'bg-secondary-extradark',
  'tertiary': 'bg-tertiary',
  'accent-1': 'bg-accent-1',
  'accent-2': 'bg-accent-2',
  'accent-3': 'bg-accent-3',
  'accent-4': 'bg-accent-4',
  'base': 'bg-base',
  'base-1': 'bg-base-1',
  'base-2': 'bg-base-2',
  'base-3': 'bg-base-3',
  'base-4': 'bg-base-4',
}

const colors_fill: any = {
  'primary': 'fill-primary',
  'primary-focus': 'fill-primary-focus',
  'primary-light': 'fill-primary-light',
  'primary-extralight': 'fill-primary-extralight',
  'primary-dark': 'fill-primary-dark',
  'primary-extradark': 'fill-primary-extradark',
  'secondary': 'fill-secondary',
  'secondary-focus': 'fill-secondary-focus',
  'secondary-light': 'fill-secondary-light',
  'secondary-extralight': 'fill-secondary-extralight',
  'secondary-dark': 'fill-secondary-dark',
  'secondary-extradark': 'fill-secondary-extradark',
  'tertiary': 'fill-tertiary',
  'accent-1': 'fill-accent-1',
  'accent-2': 'fill-accent-2',
  'accent-3': 'fill-accent-3',
  'accent-4': 'fill-accent-4',
  'base': 'fill-base',
  'base-1': 'fill-base-1',
  'base-2': 'fill-base-2',
  'base-3': 'fill-base-3',
  'base-4': 'fill-base-4',
}

const colors_text: any = {
  'primary': 'text-primary',
  'primary-focus': 'text-primary-focus',
  'primary-light': 'text-primary-light',
  'primary-extralight': 'text-primary-extralight',
  'primary-dark': 'text-primary-dark',
  'primary-extradark': 'text-primary-extradark',
  'secondary': 'text-secondary',
  'secondary-focus': 'text-secondary-focus',
  'secondary-light': 'text-secondary-light',
  'secondary-extralight': 'text-secondary-extralight',
  'secondary-dark': 'text-secondary-dark',
  'secondary-extradark': 'text-secondary-extradark',
  'tertiary': 'text-tertiary',
  'accent-1': 'text-accent-1',
  'accent-2': 'text-accent-2',
  'accent-3': 'text-accent-3',
  'accent-4': 'text-accent-4',
  'base': 'text-base',
  'base-1': 'text-base-1',
  'base-2': 'text-base-2',
  'base-3': 'text-base-3',
  'base-4': 'text-base-4',
}

const mobileSectionClass = `
section_63 
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
py-5xl 
px-lg 
gap-lg
`
const desktopDivClass = `
md:py-9xl 
md:px-5xl 
md:gap-6
max-w-[1366px]
mx-auto
`

const Container = ({
  children,
  zIndex,
  background_color,
  text_color,
}: {
  children: ReactElement[],
  zIndex: number,
  background_color: string,
  text_color: string,
}) => {
  return (
    <section
      className={`
      ${mergeClassString(mobileSectionClass, desktopSectionClass)}
      ${colors_bg[background_color] ? colors_bg[background_color] : 'bg-base'}
      ${colors_text[text_color] ? colors_text[text_color] : 'text-content-light'}
      `}
      style={{ zIndex: -zIndex }}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>

      <div className="notch absolute bottom-[2px] translate-y-[100%] w-full flex justify-between">
        <div className="w-radius-primary aspect-square"></div>
        <svg
          viewBox="0 0 167 30"
          className={`${colors_fill[background_color]} h-full max-h-[30px] aspect-[167/30]`}
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
