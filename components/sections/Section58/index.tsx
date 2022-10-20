import React from "react"
import PaymentOptionsTable from "../../atomics/PaymentOptions/PaymentOptionsTable"
import Button from "./Button"
import Title from "./Title"
import Title2 from "./Title2"
import ImageMobile from "./ImageMobile"
import ImageDesktop from "./ImageDesktop"
import Container from "../../atomics/Container"

type Section58Props = {
  blok: {
    title: string,
    title_1: string,
    subtitle: string,
    table: object[],
    image: { filename: string, alt: string },
    zIndex: any,
    button: object[],
    background_image: { filename: string }
  }
}

const Section58 = ({ blok }: Section58Props) => {
  const { title, table, title_1, image, subtitle, button } = blok
  return (
    <section className="bg-base-1 py-5xl md:py-9xl -mb-xl pt-sct relative rounded-b-sct "
      style={{
        zIndex: -blok.zIndex,
      }}
    >
      <Container paddingX="px-lg flex md:px-5x2 flex-col">
        <Title title={title} />
        <PaymentOptionsTable table={table} />
        <div className="lg:flex justify-center lg:items-center lg:h-full lg:px-[100px] md:mt-7xl lg:max-w-[1300px] md:mx-auto">
          <div className="w-full flex flex-col justify-center items-center h-full lg:items-start">
            <Title2 title={title_1} />
            <ImageDesktop image={image} />
            <p className="text-center max-w-[327px] text-[20px] md:text-[18px] mb-2xl lg:md:text-start md:max-w-[478px] md:mr-xl text-base-3">{subtitle}</p>
            <Button Button={button[0]} />
          </div>
          <ImageMobile image={image} />
        </div>
      </Container>
    </section >
  )
}
export default Section58