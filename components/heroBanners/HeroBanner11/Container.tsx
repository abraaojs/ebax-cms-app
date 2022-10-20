import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSectionClass = `
  hero_banner_11
  bg-primary-extradark
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
`

const mobileDivClass = `
  px-lg 
  py-5xl 
  flex 
  flex-col
`

const Container = ({
  children
}: {
  children: ReactElement | ReactElement[]
}) => {
  return (
    <section
      className={mergeClassString(mobileSectionClass, desktopSectionClass)}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>
    </section>
  )
}

export default Container
