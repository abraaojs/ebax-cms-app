
import React from "react"
import { colors_bg, colors_text } from "../../../utils/colors.object"
import Tag from "../../atomics/TagFlex"

type TagProps = {
  Tags: object[],
  tag_text_color: string,
  tag_background_color: string
}

const TagsS3 = (props: TagProps) => {
  const { Tags, tag_text_color, tag_background_color } = props

  return (
    <div className={`max-w-[400px] ${colors_text[tag_text_color]} m-auto md:max-w-[600px] text-[14px] md:mb-[16px] `}>
      {Tags.map((tag, i) => <Tag tag_background_color={tag_background_color} hiddeText={false} blok={tag} key={i} className="!rounded-[16px] !px-[16px] !py-[16px]" />)}
    </div>
  )
}

export default TagsS3
