import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import SquareCardFlex from '../../atomics/SquareCardFlex'

const desktopSubtitleClass = `
w-full
md:gap-[8px]
`
const mobileSubtitleClass = `
card_area
col
gap-md
pb-lg
`

const Cards = ({ cards, max_card_col }: { cards: any, max_card_col: number }) => {
  return (
    <div
      className={`${mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}  ${max_card_col ? `md:grid-cols-${max_card_col}` : `md:grid-cols-6`} `}
    >
      {cards.map((card: any, i: number) => (
        <SquareCardFlex
          key={i}
          blok={card}
          className=" w-full  my-[24px] mx-auto"
        />
      ))}
    </div>
  )
}

export default Cards
