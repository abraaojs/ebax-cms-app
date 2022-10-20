import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
  md:text-center
`
const mobileTitleClass = `
  title-5 
  font-bold
`

const Title1 = ({
  title_1,
}: {
  title_1: string
}) => {
  return (
    <p className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {title_1}
    </p>
  )
}

export default Title1
