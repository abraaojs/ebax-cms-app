import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"
import ButtonClear from "../../atomics/ButtonClear"
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

const Section57 = ({ blok }: any) => {
  const { beyond_cards } = blok
  return (
    <section className="bg-white text-content-light rounded-b-sct pb-lg md:pb-5xl w-full"
    >
      <Container paddingX="px-lg md:px-5xl  md:flex justify-center items-center ">
        {beyond_cards.map((card: any, index: number) => (
          <div key={card._uid} className={` items-center bg-base-1 flex flex-col gap-lg px-[34px] rounded-sm py-xl md:flex-row ${index === 0 || index === 1 ? "md:mr-lg" : ""} md:w-[33%] md:justify-center md:items-center mb-lg md:mb-auto`}>
            <div className="md:max-w-[100%] mx-auto flex flex-col justify-center items-center mx-auto">
              <div className=" flex flex-col items-center justify-center">
                <div className="overflow-hidden max-w-[200px] justify-center hidden md:flex h-full">
                  <img src={card.image.filename} alt={card.image.alt} className=" hidden md:block" />
                </div>
                <h3 className="text-lg2 text-[30px] uppercase mb-smd">{
                  formatMarkdown(card.title, {
                    bold: 'text-primary',
                    italic: 'text-secondary'
                  }
                  )
                }</h3>
              </div>
              <img src={card.image.filename} alt={card.image.alt} className="w-full md:hidden" />
              <p className="text-base-1 text-smd md:text-[14px] mb-[15px]">{card.paragraph}</p>
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
export default Section57