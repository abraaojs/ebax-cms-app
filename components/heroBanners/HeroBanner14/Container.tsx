import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSectionClass = `
  mb:flex-row
`
const mobileSectionClass = `
  hero_banner_14 
  bg-base 
  -mb-sct 
  relative 
  rounded-b-sct 
  flex 
  flex-col
`
const Container = ({
  children
}: {
  children: ReactElement[]
}) => {
  return (
    <section className={mergeClassString(mobileSectionClass, desktopSectionClass)}>
      {children}
    </section>
  )
}

export default Container
