import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSectionClass = `
  hero_banner_13
  relative
  rounded-b-sct
  flex
  flex-col
`

const mobileSectionClass = `
  -mb-sct
  mb:flex-row
`

const desktopDivClass = `
  md:px-[68px]
  md:py-[96px]
  md:flex-row
  md:items-center
  max-w-[1366px]
  md:mx-auto
`

const mobileDivClass = `
  px-lg 
  py-5xl 
  flex 
  flex-col
  justify-between
  
`

const Container = ({
  children,
  background_color
}: {
  children: ReactElement | ReactElement[],
  background_color: any
}) => {
  const color = 'bg-' + background_color
  return (
    <section
      className={`${mergeClassString(mobileSectionClass, desktopSectionClass)} ${color}`}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>
    </section>
  )
}

export default Container
