import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSectionClass = `
  section_19 
  bg-primary-extradark 
  text-content-light 
  -mb-sct 
  pt-sct 
  relative 
  rounded-b-sct
`

const desktopDivClass = `
  py-5xl
`
const mobileDivClass = `
  md:py-9xl 
  md:px-5xl 
  md:flex 
  md:flex-col
`
const Container = ({
  zIndex,
  children
}: {
  zIndex: number,
  children: ReactElement[]
}) => {
  return (
    <section
      className={mergeClassString('', desktopSectionClass)}
      style={{ zIndex: -zIndex }}
    >
      <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
        {children}
      </div>
    </section>
  )
}

export default Container
