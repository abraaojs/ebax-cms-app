
import React from 'react'
import CardList from "./CardList"

type CardsProps = {
  cards_white: {
    text: string,
    cards: string,
    text_group: object[]
  }[],
  bg_card: string
}

const CardsWithIcon = (props: CardsProps) => {
  const { cards_white, bg_card } = props

  return (
    <div className='lg:flex justify-center md:flex h-full '>
      {cards_white.map((cards: any, index) => (
        <div key={`iconCard${index}`} className={`h-fit bg-white rounded-[16px] p-[32px] mt-[24px] md:mt-[32px] ${index !== cards_white.length - 1 ? "md:mr-[12px] lg:mr-[28px]" : ""}  md:h-fit md:w-[33%] lg:w-[33%] md:min-h-[600px] lg:min-h-[468px]`}>
          <div className="h-full">
            <div className="w-full flex justify-start items-center ">
              <img
                className={`w-[60px] mr-[16px] md:w-[60px]`}
                src={`/icons/${cards.icon}.svg`}
                alt={cards.icon}
              />
              <div className='max-w-[100px]'>
                <span className="font-secondary text-[24px] md:text-[20px] lg:text-[24px] font-bold">{cards.title}</span>
              </div>
            </div>
            <div>
              <p className="font-secondary text-[14px] max-w-[280px] my-[24px]">{cards.text}</p>
            </div>
            <CardList fontSize={`text-[14px]`} bg_card={bg_card} hasBorder={false} widthDesktop="100%" text_group={cards.text_group} />
          </div>
        </div >
      ))
      }
    </div>
  )
}

export default CardsWithIcon
