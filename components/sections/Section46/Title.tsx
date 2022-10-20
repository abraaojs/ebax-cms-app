import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
`
const mobileDivClass = `
  justify-center
  flex
`
const desktopTitleClass = `
`
const mobileTitleClass = `
  title_text 
  text-center 
  title-2 
  mt-32px
`

const Title = ({ title_text }: { title_text: string }) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      <h2 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
        {title_text}
      </h2>
    </div>
  )
}

export default Title
