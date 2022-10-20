import React, { ReactElement } from 'react'
import { getValue } from '../../../hooks/utils'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSectionClass = `
  section_69 
  -mb-sct 
  pt-sct 
  relative 
  rounded-b-sct
  bg-base-1
`
const desktopSectionClass = `
`
const mobileDivClass = `
  flex 
  flex-col 
  gap-16
  py-5xl 
  px-lg
`
const desktopDivClass = `
  md:py-9xl 
  md:px-5xl
`

const Container = ({
  children,
  zIndex,
}: {
  children: ReactElement[]
  zIndex: number
}) => {
  return (
    <section
      className={`${mergeClassString(
        mobileSectionClass,
        desktopSectionClass
      )}`}
      style={{ zIndex: -zIndex }}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>
    </section>
  )
}

export default Container
