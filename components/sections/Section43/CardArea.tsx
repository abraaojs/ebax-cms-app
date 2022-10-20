import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import HorizontalCard from '../../atomics/HorizontalCard'
import { getValue } from '../../../hooks/utils'

const desktopSubtitleClass = `
`
const mobileSubtitleClass = `
card_area flex flex-col gap-4
`

const cardsBackground = {
  light: 'bg-base-1',
  medium: 'bg-base',
  dark: 'bg-base'
}

const CardArea = ({
  card_area,
  backgroundColor
}: {
  card_area: any
  backgroundColor: any
}) => {
  return (
    <div
      className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}
    >
      {card_area.map((card: any, i: number) => (
        <HorizontalCard
          key={i}
          blok={card}
          className={`${backgroundColor(cardsBackground)}`}
        />
      ))}
    </div>
  )
}

export default CardArea
