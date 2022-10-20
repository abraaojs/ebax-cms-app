import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
`
const mobileDivClass = `
  flex 
  gap-3 
  items-center
`
const desktopTitleClass = `
`
const mobileTitleClass = `
  title-5
  font-secondary 
  capitalize
`

const CountryType = ({
  country_type,
}: {
  country_type: string
}) => {
  return (
    <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
      {country_type && <img src={`/flags/${country_type}.svg`} width="32px" />}
      <h5 className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
        {country_type}
      </h5>
    </div>
  )
}

export default CountryType
