import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'


const Container = ({
  children,
  zIndex,
  backgroundColor
}: {
  children: ReactElement[],
  zIndex: number,
  backgroundColor: string,
}) => {
  const mobileSectionClass = `
  section_64
  bg-${backgroundColor ? backgroundColor : 'primary-extradark'} 
  ${backgroundColor == 'primary-extradark' ? 'text-content-dark' : 'text-content-light'}
  -mb-sct 
  pt-sct 
  relative 
  rounded-b-sct 
  bg-base
  
  `
  const desktopSectionClass = `
  `
  const mobileDivClass = `
  flex 
  flex-col 
  py-5xl 
  px-lg 
  gap-2xl
  `
  const desktopDivClass = `
  md:py-9xl 
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
