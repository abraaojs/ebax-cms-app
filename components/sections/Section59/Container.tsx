import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const Container = ({
  children,
  zIndex,
  backgroundColor,
}: {
  children: ReactElement[],
  zIndex: number,
  backgroundColor: string,
}) => {
  const mobileSectionClass = `
    section_59
    bg-${backgroundColor ? backgroundColor : 'base-3'} 
    ${backgroundColor == 'base-3' ? 'text-content-dark' : ''}
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
    gap-lg
  `
  const desktopDivClass = `
    md:pt-12xl 
    md:pb-9xl 
    md:px-5xl
    max-w-[1366px]
    mx-auto
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
