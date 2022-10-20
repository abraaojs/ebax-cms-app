import React from "react"
import Image1 from "./Image1"
import Image2 from "./Image2"
import Title from "./Title"
import Text from "./Text"
import ButtonX from "./Button"
import Container from "../../atomics/Container"

type Section40Props = {
  blok: {
    image_1: {
      filename: string
    },
    image_2: {
      filename: string
    },
    title: string,
    text: string,
    Button: any,
    zIndex: any
  }
}


const Section40 = (props: Section40Props) => {
  const { image_1, image_2, title, text, Button, zIndex } = props.blok;

  return (
    <section className="section_40 w-full md:py-[96px] bg-base-1 py-[64px] -mb-sct pt-sct relative rounded-b-sct"
      style={{ zIndex: -zIndex }}>
      <Container paddingX="px-[24px] md:px-[68px] justify-center md:flex ">
        <div className="md:mr-[48px]">
          <Title title={title} />
          <Text text={text} />
          <ButtonX Button={Button[0]} />
        </div>
        <div className="w-full flex justify-center md:w-[50%] pt-[32px]">
          <Image1 image_1={image_1} />
          <Image2 image_2={image_2} />
        </div>
      </Container>
    </section>
  )
}

export default Section40