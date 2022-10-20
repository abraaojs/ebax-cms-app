import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_bg, colors_text } from '../../../utils/colors.object'

const mobileSectionClass = `
  section_46 
  -mb-sct 
  pt-sct 
  relative 
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
  md:mx-auto
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

    </section>
  )
}

export default Container
