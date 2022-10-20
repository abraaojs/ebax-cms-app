import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const mobileTitle1Class = `
  color-base-1 
  font-secondary
  title-4
  md:max-w-[80%]
`

const desktopTitle1Class = `
  text-left
`

const Title1 = ({ title_1 }: { title_1: string }) => {
  return (
    <h3 className={mergeClassString(mobileTitle1Class, desktopTitle1Class)}>
      {title_1}
    </h3>
  )
}

export default Title1
