import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import Tag from '../../atomics/Tag'

const desktopTagAreaClass = `
md:flex
md:flex-wrap
md:grid
md:grid-cols-4
md:w-fit
md:self-center	
`
const mobileTagAreaClass = `
tag_area 
grid-cols-2
gap-sm
`

const TagArea = ({ tag_area }: { tag_area: any }) => {
  return (
    <div className={mergeClassString(mobileTagAreaClass, desktopTagAreaClass)}>
      {tag_area.map((tag: any, i: number) => (
        <Tag hiddeText={false} key={i} blok={tag} />
      ))}
    </div>
  )
}

export default TagArea
