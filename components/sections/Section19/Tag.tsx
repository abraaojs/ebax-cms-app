import React from 'react'
import formatClassString from '../../../utils/format.class.string'

const desktopTagClass = `
  bg-secondary
  text-[18px] 
  font-bold 
  py-sm 
  px-md 
  rounded-[8px] 
  w-max 
  px-lg
`
const Tag = ({
  tag,
}: {
  tag: string
}) => {
  return (
    <div className={formatClassString(desktopTagClass)}>
      {tag}
    </div>
  )
}

export default Tag
