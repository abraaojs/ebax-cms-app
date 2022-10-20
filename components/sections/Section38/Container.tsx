import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const Container = ({
  children,
  zIndex,
}: {
  children: ReactElement[],
  zIndex: number,
}) => {
  const mobileSectionClass = `
  section_38
  bg-base
  pb-3xl
  pt-5xl
`
  const desktopSectionClass = `
`
  const mobileDivClass = `
  bg-base-1
  rounded-sct
  flex 
  flex-col 
  py-xl
  mx-lg
  gap-7
  justify-center
`
  const desktopDivClass = `
  md:gap-2
  md:flex-row 
`
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
