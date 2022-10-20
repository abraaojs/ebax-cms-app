import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import Collapse, { CollapseType } from '../../atomics/Collapse'

const mobileCardAreaClass = `
`
const desktopCardAreaClass = `
  card_area 
`
const mobileEventCardClass = `
`
const desktopEventCardClass = `
`

const CollapseArea = ({
  collapse_area,
}: {
  collapse_area: CollapseType[]
}) => {
  return (
    <div
      className={mergeClassString(mobileCardAreaClass, desktopCardAreaClass)}
      style={{
        zIndex: 1
      }}>
      {collapse_area.map((card: any, i: number) => (
        <Collapse
          key={i}
          blok={card}
          className={mergeClassString(mobileEventCardClass, desktopEventCardClass)}
        />
      ))}
    </div>
  )
}

export default CollapseArea
