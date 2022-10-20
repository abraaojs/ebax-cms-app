import React, { ReactElement } from 'react'
import mergeClassString from '../../../utils/merge.class.string'


const desktopDivClass = `
  md:pt-12xl 
  md:pb-9xl 
  md:px-5xl
`
const mobileDivClass = `
  pt-7xl 
  pb-5xl
  px-lg 
  flex 
  flex-col
  max-w-[1366px]
  mx-auto
`

const Container = ({
  children
}: {
  children: ReactElement[]
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      {children}
    </div>
  )
}

export default Container
