import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import HorizontalCard from '../../atomics/HorizontalCard'
import { getValue } from '../../../hooks/utils'
import ButtonClear from '../../atomics/ButtonClear'

const desktopSubtitleClass = `
md:grid-cols-4
`
const mobileSubtitleClass = `
card_area
grid
gap-xl
grid-cols-1
`

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
      {card_area.map((card: any, i: number) => {

        const splitBySpaces = card.content_text.split('---')

        const isItAList = splitBySpaces.length > 1

        return (
          <div key={i} className={`horizontal_card bg-base rounded-2xl flex flex-col gap-6 bg-${backgroundColor ? backgroundColor : 'primary-extradark'} 
           ${backgroundColor == 'primary-extradark' ? 'text-content-dark' : 'text-content-light'}`}>
            {card.icon_type && (
              <img
                className={`w-[32px]`}
                src={`/icons/${card.icon_type}.svg`}
                alt={card.icon_type}
              />
            )}
            {card.flag_type && (
              <img
                className="w-[32px]"
                src={`/flags/${card.flag_type}.svg`}
                alt={card.flag_type}
              />
            )}
            <div className="flex gap-3 items-center">
              <h5 className="title-5 font-secondary">{card.title_text}</h5>
            </div>
            <ul>
              {isItAList ? splitBySpaces.map((textItem: string, index: any) => <li className="mx-[24px] mb-[5px] paragraph-3" key={`a_${index}_list`}>{formatMarkdown(textItem, {
                bold: 'font-bold',
                italic: 'font-italic'
              })}</li>) : <p className="paragraph-3">{card.content_text}</p>}
            </ul>
            {card.button_area.length > 0 &&
              <div>
                {card.button_area.map((button: any, i: number) => (
                  <ButtonClear key={i} blok={button} />
                ))}
              </div>
            }
          </div>


        )
      })}
    </div>
  )
}

export default CardArea
