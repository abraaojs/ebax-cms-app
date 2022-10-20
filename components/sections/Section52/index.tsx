import React from "react"
import Button from "./Button"
import Title from "./Title"
import TextContent from "./TextContent"
import Image1 from "./Image1"
import Image2 from "./Image2"
import TextContent2 from "./TextContent2"
import Container from "../../atomics/Container"

type Section52Props = {
  blok: {
    title: string,
    text: any,
    image_1: { filename: string, alt: string },
    image_2: { filename: string, alt: string },
    text2: { content: string, _uid: string }[],
    button: object[],
    zIndex: any
  }
}

const Section52 = ({ blok }: Section52Props) => {
  const { title, text, image_1, image_2, text2, button } = blok
  return (
    <section className="bg-white w-full py-5xl md:py-9xl -mb-sct pt-sct relative rounded-b-sct flex flex-col items-center"
      style={{
        zIndex: -blok.zIndex,
      }}
    >
      <Container paddingX="px-lg md:px-5x2 ">
        <Title title={title} />
        <TextContent text={text} />
        <div className="md:flex mt-xl">
          <div className="flex flex-col items-center md:mr-[52px]">
            <Image1 image_1={image_1} />
            <Image2 image_2={image_2} />
          </div>
          <div className="flex flex-col max-w-[451px] justify-center">
            <TextContent2 text2={text2} />
          </div>
        </div>
        <Button Button={button[0]} />
      </Container>
    </section>
  )

}
export default Section52