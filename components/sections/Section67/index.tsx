import React from "react"
import Image1 from "./Image1"
import Image2 from "./Image2"
import Title from "./Title"
import Text from "./Text"
import ButtonX from "./Button"

type Section67Props = {
  blok: {
    image1: {
      filename: string
    },
    image2: {
      filename: string
    },
    title: string,
    text: string,
    Button: any,
    zIndex: any
  }
}

const Section67 = (props: Section67Props) => {
  const { image1, image2, title, text, Button, zIndex } = props.blok;

  return (
    <section className="w-full gap-6 px-lg pt-7xl pb-5xl md:pt-12xl md:pb-9xl md:px-5x2 justify-center bg-extradark text-content-dark grid-cols-1 md:grid-cols-2"
      style={{ zIndex: -zIndex }}>
      <div className="flex md:justify-end">
        <div className=" md:w-70% flex flex-col items-start">
          <Title title={title} />
          <Text text={text} />
        </div>
      </div>
      <div className="w-full row-span-2 flex justify-center gap-x-4">
        <Image1 image1={image1} />
        <Image2 image2={image2} />
      </div>
      <div className="flex justify-end">
        <div className="md:w-70% w-full">
          <ButtonX Button={Button[0]} />
        </div>
      </div>
    </section>
  )
}

export default Section67