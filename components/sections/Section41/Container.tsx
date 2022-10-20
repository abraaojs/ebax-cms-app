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
`

const mobileSecondDivClass = `
  flex
  flex-col
  md:p-xl
  max-w-[1366px]
  md:mx-auto
  gap-xl
  rounded-sm
`

const desktopSecondDivClass = `
`

const Container = ({
  children
}: {
  children: ReactElement[]
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      <div className={mergeClassString(mobileSecondDivClass, desktopSecondDivClass)}>
        {children}
      </div>
    </div>
  )
}

export default Container
