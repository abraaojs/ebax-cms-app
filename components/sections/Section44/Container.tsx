import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import { colors_bg } from '../../../utils/colors.object'

const Container = ({
  children,
  zIndex,
  background_color,
}: {
  children: ReactElement[],
  zIndex: number,
  background_color: string,
}) => {
  const mobileSectionClass = `
    section_44
    -mb-sct 
    pt-sct 
    relative 
    rounded-b-sct
  `
  const desktopSectionClass = `
  `
  const mobileDivClass = `
    pt-7xl 
    pb-5xl
    px-lg 
    flex 
    flex-col 
    gap-2xl
  `
  const desktopDivClass = `
    md:pt-9xl 
    md:pb-9xl 
    md:px-5xl
    max-w-[1366px]
    md:mx-auto
  `
  return (
    <section
      className={`${mergeClassString(mobileSectionClass, desktopSectionClass)} ${colors_bg[background_color]}`}
      style={{ zIndex: -zIndex }}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>
    </section>
  )
}

export default Container
