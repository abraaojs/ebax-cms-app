import React, { ReactElement } from 'react'
import { getValue } from '../../../hooks/utils'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSectionClass = `
  section_50 
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
  gap-64px 
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
  backgroundColor
}: {
  children: ReactElement[]
  zIndex: number
  backgroundColor: string
}) => {
  return (
    <section
      className={`${mergeClassString(
        mobileSectionClass,
        desktopSectionClass
      )}${backgroundColor}`}
      style={{ zIndex: -zIndex }}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>
    </section>
  )
}

export default Container
