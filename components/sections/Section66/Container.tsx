import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'


const Container = ({
  children, background_color
}: {
  children: ReactElement | ReactElement[],
  background_color: string
}) => {

  const desktopSectionClass = `
bg-${background_color ? background_color : 'base-1'} 
relative
content-dark
rounded-b-sct
flex
flex-col
`

  const mobileSectionClass = `
section_66
-mb-sct
mb:flex-row
`

  const desktopDivClass = `
md:px-5x2
md:pt-12xl
md:pb-9xl
md:flex-row
md:items-center
`

  const mobileDivClass = `
px-lg 
pt-7xl 
pb-5xl
flex 
flex-col
justify-between
max-w-[1366px]
mx-auto
`
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
