import React, { ReactElement } from 'react'
import { colors_bg, colors_border, colors_text } from '../../../utils/colors.object'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSectionClass = `
  hero_banner_10 
  -mb-sct 
  relative 
  rounded-b-sct 
  flex 
  flex-col 
  border-b-10 
`
const desktopSectionClass = `
  mb:flex-row
`

const mobileDivClass = `
  px-lg 
  py-5xl 
  flex 
  flex-col
  justify-between
`

const desktopDivClass = `
  w-[1366px]
  md:py-9xl
  md:px-[192px]
  md:flex-row
`

const Container = ({
  children,
  background_color,
  border_bottom_color,
  text_color
}: {
  children: ReactElement[],
  background_color: string,
  border_bottom_color: string
  text_color: string
}) => {
  return (
    <section className={`${mergeClassString(mobileSectionClass, desktopSectionClass)} ${colors_bg[background_color]} ${colors_border[border_bottom_color]} ${colors_text[text_color]}`}>
      <div className='w-fully flex justify-center border-primary'>

        <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Container
