import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import HorizontalCard from '../../atomics/HorizontalCard'
import { getValue } from '../../../hooks/utils'
import ButtonClear from '../../atomics/ButtonClear'

const desktopSubtitleClass = `
`
const mobileSubtitleClass = `
card_area flex flex-wrap gap-4 justify-between
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
        <div key={card._uid}
          className={`horizontal_card bg-base p-xl rounded-2xl flex flex-col gap-6 ${backgroundColor(
            cardsBackground
          )} md:basis-[calc(33.33%-1rem)] min-w-full md:min-w-0 text-center`}
        >
          <div className="gap-3 items-center">
            <img
              className="w-[60px]"
              src={`/icons/${card.icon_type}.svg`}
              alt={card.icon_type}
            />
            <h3 className="title-4 font-secondary">{card.title_text}</h3>
          </div>
          <p className="paragraph-3">{formatMarkdown(card.content_text, {
            bold: 'font-bold',
            italic: 'font-italic'
          })}</p>
          <div>
            {card.button_area.map((button: any, i: number) => (
              <ButtonClear key={i} blok={button} />
            ))}
          </div>
        </div>

        // <HorizontalCard
        //   key={i}
        //   blok={card}
        //   className={`${backgroundColor(
        //     cardsBackground
        //   )} md:basis-[calc(33.33%-1rem)] min-w-full md:min-w-0 text-center`}
        // />
      ))}
    </div>
  )
}

export default CardArea
