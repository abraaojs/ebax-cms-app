import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
  md:max-w-5xl
  md:mb-0
`
const mobileTitleClass = `
  title-2 
  uppercase 
  mb-lg
`

const Title = ({
  title,
}: {
  title: string
}) => {
  return (
    <h2 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {title}
    </h2 >
  )
}

export default Title
