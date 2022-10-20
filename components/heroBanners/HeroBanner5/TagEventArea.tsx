import React from 'react'
import TagEvent from '../../atomics/TagEvent'

const mobileDivClass = `
  flex
  flex-row
  justify-center
  md:gap-md
  gap-lg
`

const TagEventArea = ({
  tags_event,
}: {
  tags_event: any[]
}) => {
  return (
    <div className={mobileDivClass}>
      {tags_event.map((tag: any, i: number) => (
        <TagEvent
          key={i}
          tag={tag}
        />
      ))}
    </div>
  )
}

export default TagEventArea
