import React, { useState } from "react"
import Title from "./Title"
import Text from "./Text"
import Table62Payments from "../../atomics/Table62Payments/Table62Payments"
import Container from "../../atomics/Container"

const Section62 = ({ blok }: any) => {
  const { title, subtitle_text, subtitle_text_1, payments_table } = blok

  return (
    <section className="bg-[#F2F2F2] pt-[80px] pb-[64px] md:pt-[128px] flex flex-col items-center -mb-sct relative rounded-b-sct md:pb-[96px]"
      style={{
        zIndex: -blok.zIndex,
      }}
    >
      <Container paddingX="px-lg md:px-[68px] ">
        <div className="w-full flex flex-col items-center">
          <Title title={title} />
          <Text text={subtitle_text} className="font-700 mt-lg" />
          <Text text={subtitle_text_1} className="mt-lg" />
        </div>
        {<Table62Payments
          continents={blok.payments_data_source}
          tag_payment_methods={blok.tag_payment_methods}
          support_text_mobile={blok.support_text}
          title={payments_table[0].title}
        />}
      </Container>
    </section >
  )
}
export default Section62