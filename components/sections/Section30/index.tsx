import React from "react"
import Icon from "./Icon"
import TitleT from "./TitleT"
import TagsS3 from "./Tags"
import ButtonS3 from "./Button"
import TextS3 from "./Text"
import Container from "./Container"
import { colors_bg, colors_text } from "../../../utils/colors.object"


type Section30 = {
  blok: {
    Tags: object[],
    Text: string,
    _uid: string,
    Title: string,
    Button: any,
    component: string,
    icon_type: string,
    zIndex: any,
    background_color: string,
    text_color: string,
    bold_color: string,
    title_font_topol: boolean,
    tag_background_color: string,
    tag_text_color: string
  }
}

const Section30 = (props: Section30) => {
  const { icon_type, Text, Tags, Button, Title, zIndex, background_color, text_color, bold_color, title_font_topol, tag_background_color, tag_text_color } = props.blok
  const className = `w-full flex-col px-[24px] py-[64px] ${colors_text[text_color]} md:px-[68px] md:pt-[10px] md:pb-[96px] ${colors_bg[background_color]} -mb-sct pt-sct relative rounded-b-sct`
  return (
    <section className={className}
      style={{ zIndex: -zIndex }}>
      <Container>
        <Icon icon_type={icon_type} marginAuto={true} />
        <TitleT title_font_topol={title_font_topol} Title={Title} bold_color={bold_color} />
        <TextS3 Text={Text} />
        <TagsS3 Tags={Tags} tag_background_color={tag_background_color} tag_text_color={tag_text_color} />
        <ButtonS3 Button={Button[0]} />
      </Container>
    </section>
  )
}

export default Section30