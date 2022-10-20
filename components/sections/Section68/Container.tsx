import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSectionClass = `
  section_68 
  bg-base 
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
  md:mx-auto
`

const Container = ({
  children,
  zIndex
}: {
  children: ReactElement[]
  zIndex: number
}) => {
  return (
    <section
      className={mergeClassString(mobileSectionClass, desktopSectionClass)}
      style={{ zIndex: -zIndex }}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>
    </section>
  )
}

export default Container
