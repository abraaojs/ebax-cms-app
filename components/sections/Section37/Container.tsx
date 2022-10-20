import React, { ReactElement } from 'react'
import { colors_bg, colors_text } from '../../../utils/colors.object'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSectionClass = `
  section_37 
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
  max-w-[1366px]
  mx-auto
`

const Container = ({
  children,
  zIndex,
  background_color,
  title_color
}: {
  children: ReactElement[],
  zIndex: number,
  background_color: string,
  title_color: string
}) => {
  return (
    <section
      className={`${mergeClassString(mobileSectionClass, desktopSectionClass)} ${colors_bg[background_color]} ${colors_text[title_color]}`}
      style={{ zIndex: -zIndex }}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>
    </section>
  )
}

export default Container
