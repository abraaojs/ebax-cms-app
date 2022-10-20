import React from "react"
import Button from "./Button"
import ReceiverOptionsCard from "../../atomics/ReceiverOptionsCard"
import ButtonDesktop from "./ButtonDesktop"
import Title from "./Title"
import Subtitle from "./Subtitle"
import BottomDetail from "./BottomDetail"

type Section54Props = {
  blok: {
    title: string,
    subtitle: string,
    zIndex: any,
    button: object[],
    options_card: object[]
  }
}

const Section54 = ({ blok }: Section54Props) => {
  const { title, subtitle, button, options_card } = blok
  return (
    <section className="-mb-[30px] relative rounded-b-sct" style={{
      zIndex: -blok.zIndex,
    }}>
      <div className="bg-tertiary px-lg pt-7xl pb-xl md:pt-12xl md:pb-9xl -mb-sct relative rounded-b-sct flex flex-col md:flex-row items-center justify-center  md:overflow-x-hidden"
        style={{
          zIndex: -blok.zIndex,
        }}
      >
        <div className="flex flex-col items-center  pt-xl md:min-w-[298px] md:mr-[104px]">
          <Title title={title} />
          <Subtitle subtitle={subtitle} />
          <ButtonDesktop Button={button[0]} classN=" hidden md:block absolute z-[-10] left-[5000px] md:z-auto md:relative md:left-[0px]" />
        </div>
        <ReceiverOptionsCard options_card={options_card[0]} />
        <Button Button={button[0]} classN="md:hidden " />
      </div>
      <BottomDetail color="tertiary" />
    </section>
  )

}
export default Section54