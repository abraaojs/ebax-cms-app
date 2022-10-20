import React from "react"
import ButtonClear from "../../atomics/ButtonClear"
import ImageDesktop from "./ImageDesktop"
import ImageMobile from "./ImageMobile"
import Title from "./Title"
import Text from "./Text"
import Container from "../../atomics/Container"

type Section56Props = {
  blok: {
    beyond_cards: object[],
  }
}

const Section56 = ({ blok }: Section56Props) => {
  const { beyond_cards } = blok
  return (
    <section className="bg-white pb-[24px] md:pb-[68px] w-full"
    >
      <Container paddingX="px-lg md:px-5xl md:flex justify-center items-center ">

        {beyond_cards.map((card: any, index: number) => (
          <div key={card._uid} className={` items-center bg-base-1 flex flex-col gap-lg px-md rounded-sm py-xl md:pl-[60px] md:flex-row ${index === 0 ? "md:mr-[24px]" : ""} md:w-[50%] justify-center items-center mb-[24px] md:mb-auto`}>
            <ImageDesktop image={card.image} />
            <div className="md:max-w-[260px]">
              <Title title={card.title} />
              <ImageMobile image={card.image} />
              <Text text={card.paragraph} />
              <div className="flex w-[100%]">
                <ButtonClear blok={card.button[0]} link="" />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section >
  )
}
export default Section56