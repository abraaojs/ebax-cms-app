import React from 'react'
import formatClassString from '../../../utils/format.class.string'

const desktopTitleClass = `
  title-5 
  color-base-3
  text-center
`

const Support = ({
  support,
}: {
  support: string
}) => {
  return (
    <p className={formatClassString(desktopTitleClass)}>
      {support}
    </p>
  )
}

export default Support
