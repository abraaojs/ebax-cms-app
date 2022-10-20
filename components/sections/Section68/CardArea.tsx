import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const desktopDivClass = `
md:flex
md:flex-wrap
md:grid
md:grid-cols-4
md:w-fit
md:self-center	
`
const mobileDivClass = `
card_area 
grid-cols-1
mt-lg
gap-6
`

const CardArea = ({ card_area, className }: { card_area: any, className?: string }) => {
  return (
    <div
      className={`${mergeClassString(mobileDivClass, desktopDivClass)}`}
    >
      {card_area.map((card: any, i: number) => {

        const splitBySpaces = card.content_text.split('---')

        const isItAList = splitBySpaces.length > 1

        return (
          <div key={i} className={`horizontal_card rounded-2xl p-xl gap-6 flex flex-row md:flex-col bg-base-1 ${className}`}>
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
            <ul>
              {isItAList ? splitBySpaces.map((textItem: string, index: any) => <li className="mx-[24px] mb-[5px] paragraph-3 font-bold" key={`a_${index}_list`}>{formatMarkdown(textItem, {
                bold: 'font-bold',
                italic: 'font-italic'
              })}</li>) : <p className="paragraph-3 font-bold">{card.content_text}</p>}
            </ul>

          </div>
        )
      })}
    </div>
  )
}

export default CardArea
