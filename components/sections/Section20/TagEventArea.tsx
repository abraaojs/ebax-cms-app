import { getStoryblokApi } from '@storyblok/react'
import React, { useEffect, useState } from 'react'
import TagEvent from '../../atomics/TagEvent'

const mobileDivClass = `
  flex
  flex-row
  gap-md
`

type tagEventColorType = {
  value: string,
  name: string,
}

const TagEventArea = ({
  tags_event,
  tag_events_color,
}: {
  tags_event: string[],
  tag_events_color: any[]
}) => {
  return (
    <div className={mobileDivClass}>
      {tags_event.map((tag: any, i: number) => (
        <TagEvent
          key={i}
          tag={tag}
          tagEventsColors={tag_events_color}
        />
      ))}
    </div>
  )
}

export default TagEventArea
