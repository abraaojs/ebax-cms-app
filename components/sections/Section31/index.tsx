import React from "react"
import Image1 from "./ImagePerson"
import Image2 from "./ImageEnviroment"
import Title from "./Title"
import Text from "./Text"
import ButtonX from "./Button"
import { colors_bg, colors_text } from "../../../utils/colors.object"

type Section31Props = {
  blok: {
    image_person: {
      filename: string
    },
    image_enviroment: {
      filename: string
    },
    title: string,
    text: string,
    Button: any,
    zIndex: any,
    background_color: string,
    text_color: string,
    bold_color: string,
    title_font_topol: boolean
  }
}


const Section31 = (props: Section31Props) => {
  const { image_person, image_enviroment, title, text, Button, zIndex, background_color, text_color, bold_color, title_font_topol } = props.blok;

  return (
    <section className={`${colors_bg[background_color]} w-full py-[64px] md:py-[32px] md:pb-[96px] -mb-sct pt-sct relative rounded-b-sct ${colors_text[text_color]}`}
      style={{ zIndex: -zIndex }}>
      <div className="mx-auto max-w-[1366px] justify-center items-start px-[24px] md:px-[68px] md:flex md:flex-row-reverse ">

        <div className="w-full flex justify-center md:w-[50%] pt-[64px] md:pt-[96px]">
          <Image2 image_enviroment={image_enviroment} />
          <Image1 image_person={image_person} />
        </div>
        <div className="md:mr-[48px]  md:mt-[96px] md:min-h-[411px] flex flex-col justify-between">
          <Title title={title} bold_color={bold_color} title_font_topol={title_font_topol} />
          <Text text={text} />
          <ButtonX Button={Button[0]} />
        </div>
      </div>
    </section>
  )
}

export default Section31