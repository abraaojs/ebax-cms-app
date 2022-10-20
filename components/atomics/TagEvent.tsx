import React from 'react'

const desktopDivClass = `
  p-sm
  text-sm 
  font-bold 
  mt-md
  mb-md
  rounded-xs
  paragraph-4
`
type tagEventColorType = {
  value: string,
  name: string,
}

const TagEvent = ({
  tag,
  tagEventsColors
}: {
  tag: any
  tagEventsColors?: tagEventColorType[] | undefined
}) => {
  const backgroundColor = tag?.tag_color ? tag.tag_color.color : tagEventsColors && tagEventsColors.find(e => e.name === tag)?.value
  return (
    <div
      className={desktopDivClass}
      style={{ backgroundColor: backgroundColor }}
    >
      {tag?.tag_text ? tag.tag_text : tag}
    </div>
  )
}

export default TagEvent
