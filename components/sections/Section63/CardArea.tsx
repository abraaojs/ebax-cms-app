import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import HorizontalCard from '../../atomics/HorizontalCard'
import { getValue } from '../../../hooks/utils'
import ButtonClear from '../../atomics/ButtonClear'

const colors_bg: any = {
  'primary': 'bg-primary',
  'primary-focus': 'bg-primary-focus',
  'primary-light': 'bg-primary-light',
  'primary-extralight': 'bg-primary-extralight',
  'primary-dark': 'bg-primary-dark',
  'primary-extradark': 'bg-primary-extradark',
  'secondary': 'bg-secondary',
  'secondary-focus': 'bg-secondary-focus',
  'secondary-light': 'bg-secondary-light',
  'secondary-extralight': 'bg-secondary-extralight',
  'secondary-dark': 'bg-secondary-dark',
  'secondary-extradark': 'bg-secondary-extradark',
  'tertiary': 'bg-tertiary',
  'accent-1': 'bg-accent-1',
  'accent-2': 'bg-accent-2',
  'accent-3': 'bg-accent-3',
  'accent-4': 'bg-accent-4',
  'base': 'bg-base',
  'base-1': 'bg-base-1',
  'base-2': 'bg-base-2',
  'base-3': 'bg-base-3',
  'base-4': 'bg-base-4',
}

const colors_fill: any = {
  'primary': 'fill-primary',
  'primary-focus': 'fill-primary-focus',
  'primary-light': 'fill-primary-light',
  'primary-extralight': 'fill-primary-extralight',
  'primary-dark': 'fill-primary-dark',
  'primary-extradark': 'fill-primary-extradark',
  'secondary': 'fill-secondary',
  'secondary-focus': 'fill-secondary-focus',
  'secondary-light': 'fill-secondary-light',
  'secondary-extralight': 'fill-secondary-extralight',
  'secondary-dark': 'fill-secondary-dark',
  'secondary-extradark': 'fill-secondary-extradark',
  'tertiary': 'fill-tertiary',
  'accent-1': 'fill-accent-1',
  'accent-2': 'fill-accent-2',
  'accent-3': 'fill-accent-3',
  'accent-4': 'fill-accent-4',
  'base': 'fill-base',
  'base-1': 'fill-base-1',
  'base-2': 'fill-base-2',
  'base-3': 'fill-base-3',
  'base-4': 'fill-base-4',
}

const colors_text: any = {
  'primary': 'text-primary',
  'primary-focus': 'text-primary-focus',
  'primary-light': 'text-primary-light',
  'primary-extralight': 'text-primary-extralight',
  'primary-dark': 'text-primary-dark',
  'primary-extradark': 'text-primary-extradark',
  'secondary': 'text-secondary',
  'secondary-focus': 'text-secondary-focus',
  'secondary-light': 'text-secondary-light',
  'secondary-extralight': 'text-secondary-extralight',
  'secondary-dark': 'text-secondary-dark',
  'secondary-extradark': 'text-secondary-extradark',
  'tertiary': 'text-tertiary',
  'accent-1': 'text-accent-1',
  'accent-2': 'text-accent-2',
  'accent-3': 'text-accent-3',
  'accent-4': 'text-accent-4',
  'base': 'text-base',
  'base-1': 'text-base-1',
  'base-2': 'text-base-2',
  'base-3': 'text-base-3',
  'base-4': 'text-base-4',
}


const CardArea = ({
  card_area,
  max_card_col
}: {
  card_area: any
  max_card_col: number
}) => {
  const desktopSubtitleClass = `
  `
  const mobileSubtitleClass = `
  card_area flex flex-wrap gap-4 line -mr-5 md:grid ${max_card_col ? `md:grid-cols-${max_card_col}` : `md:grid-cols-6`} md:overflow-x-visible pb-lg pr-lg
  `

  return (
    <div
      className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}
    >
      {card_area.map((card: any, i: number) => {

        const bg = colors_bg[card.background_color] ? colors_bg[card.background_color] : ""
        const title_color = colors_text[card.title_text[0].text_color] ? colors_text[card.title_text[0].text_color] : ""
        const content_color = colors_text[card.content_text[0].text_color] ? colors_text[card.content_text[0].text_color] : ""

        return (
          <div key={card._uid}
            className={`horizontal_card p-xl rounded-2xl flex flex-col gap-6 md:basis-[calc(20%-1rem)] min-w-full md:min-w-0 text-center ${bg == "" ? "bg-base-1" : bg}`}
          >
            <div className="gap-3 items-center">
              <img
                className="w-[32px]"
                src={`/icons/${card.icon_type}.svg`}
                alt={card.icon_type}
              />

              <h3 className={`title-5 font-secondary ${title_color} ${card.title_text[0].font_family_topol ? 'font-primary' : 'font-secondary'}`}>
                {formatMarkdown(card.title_text[0].text, {
                  bold: 'font-700',
                  italic: 'text-secondary'
                })}
              </h3>

            </div>
            <p className={`paragraph-3 ${content_color} ${card.content_text[0].font_family_topol ? 'font-primary' : 'font-secondary'}`}>{formatMarkdown(card.content_text[0].text, {
              bold: 'font-700',
              italic: 'text-secondary'
            })}</p>
            <div>
              {card.button_area.map((button: any, i: number) => (
                <ButtonClear key={i} blok={button} />
              ))}
            </div>
          </div>

        )
      })}
    </div>
  )
}

export default CardArea
