import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import SquareCard from '../../atomics/SquareCard'

const desktopSubtitleClass = `
md:line
`
const mobileSubtitleClass = `
card_area
col
gap-md
`

const CardArea = ({ card_area, background_color }: { card_area: any, background_color: string }) => {
  return (
    <div
      className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}
    >
      {card_area.map((card: any, i: number) => (
        <SquareCard
          key={i}
          blok={card}
          className={`min-w-[273px] md:min-w-[384px] md:flex-1 my-[24px] bg-${background_color == 'base' ? 'base-1' : 'base'}`}
        />
      ))}
    </div>
  )
}

export default CardArea
