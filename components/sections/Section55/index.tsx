import React from "react"
import Button from "./Button"
import Title from "./Title"
import Text from "./Text"

type Section55Props = {
  blok: {
    title: string,
    text: string,
    zIndex: any,
    button: object[],
    background_image: { filename: string }
  }
}

const Section55 = ({ blok }: Section55Props) => {
  const { background_image, title, text, button } = blok
  return (
    <section className="text-white bg-center bg-cover px-lg pt-7xl flex flex-col items-center md:px-5xl relative  md:pt-12xl"
      style={{
        backgroundImage: `url(${background_image.filename})`,
        zIndex: -blok.zIndex,
      }}
    >
      <Title title={title} />
      <Text text={text} />
      <Button Button={button[0]} />
    </section>
  )

}
export default Section55