import React from "react"
import Button from "./Button"
import BottomDetail from "./BottomDetail"
import Title from "./Title"
import Text from "./Text"
import Image from "./Image"
import Container from "../../atomics/Container"

type Section53Props = {
  blok: {
    title: string,
    zIndex: any,
    text: string,
    image: { filename: string, alt: string },
    button: object[]
  }
}

const Section53 = ({ blok }: Section53Props) => {
  const { title, text, image, button } = blok
  return (
    <section className=" bg-white pt-5xl md:pt-12xl -mb-sct pt-sct relative rounded-b-sct"
      style={{
        zIndex: -blok.zIndex,
      }}
    >
      <Container paddingX="px-lg md:px-5x2 flex flex-col items-center">
        <Title title={title} />
        <Text text={text} />
        <Image image={image} />
        <Button Button={button[0]} />
        <BottomDetail color="white" />
      </Container>
    </section>
  )

}
export default Section53