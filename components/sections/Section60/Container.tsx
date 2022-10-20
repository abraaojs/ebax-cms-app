import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const mobileSectionClass = `
section_60 
text-content-light 
-mb-sct 
pt-sct 
relative 
rounded-b-sct 
bg-base
`
const desktopSectionClass = `
`
const mobileDivClass = `
py-5xl 
px-lg 
grid 
grid-1 
gap-3 
`
const desktopDivClass = `
md:py-9xl 
md:px-5xl 
md:grid-cols-2 
md:gap-6
max-w-[1366px]
md:mx-auto
`

const Container = ({
  children,
  zIndex,
}: {
  children: ReactElement[],
  zIndex: number,
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
