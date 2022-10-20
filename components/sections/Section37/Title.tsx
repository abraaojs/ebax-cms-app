import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
  md:justify-center
`
const mobileDivClass = `
  flex
`
const desktopTitleClass = `
  md:text-center 
`
const mobileTitleClass = `
  title_text 
  title-4 
  font-secondary 
  max-w-xl
`

const Title = ({
  title_text,
}: {
  title_text: string
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      <h2 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
        {title_text}
      </h2>
    </div>
  )
}

export default Title
