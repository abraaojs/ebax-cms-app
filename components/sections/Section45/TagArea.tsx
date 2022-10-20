import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import TagFlex from '../../atomics/TagFlex'
import { colors_text } from '../../../utils/colors.object'

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

const TagArea = ({ tag_area, tag_background_color, tag_text_color }: { tag_area: any, tag_background_color: string, tag_text_color: string }) => {
  return (
    <div className={`${mergeClassString(mobileTagAreaClass, desktopTagAreaClass)} ${colors_text[tag_text_color]}`}>
      {tag_area.map((tag: any, i: number) => (
        <TagFlex tag_background_color={tag_background_color} hiddeText={false} key={i} blok={tag} />
      ))}
    </div>
  )
}

export default TagArea
