import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
  md:max-w-4xl 
  md:text-center
`
const mobileTitleClass = `
  title_text 
  font-primary 
  title-3 
  max-w-lg 
`

const Title = ({
  title_text,
}: {
  title_text: string
}) => {
  return (
    <h3 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {title_text}
    </h3>
  )
}

export default Title
