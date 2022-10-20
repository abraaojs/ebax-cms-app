import React from 'react'
import formatClassString from '../../../utils/format.class.string'

const desktopTitleClass = `
  title-3 
  color-base 
  uppercase 
  px-lg
`

const Title = ({
  title,
}: {
  title: string
}) => {
  return (
    <h3 className={formatClassString(desktopTitleClass)}>
      {title}
    </h3>
  )
}

export default Title
