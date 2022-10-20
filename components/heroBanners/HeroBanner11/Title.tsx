import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const mobileTitleClass = `
  title-1
  uppercase 
  color-base-1
  mb-lg
  text-center
`

const desktopTitleClass = `
  md:max-w-5xl
  text-left
`

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {title}
    </h1>
  )
}

export default Title
