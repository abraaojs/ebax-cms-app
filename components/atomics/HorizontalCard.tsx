import React from 'react'
import ButtonClear from './ButtonClear'
import formatMarkdown from '../../hooks/useMarkdown'

const HorizontalCard = ({
  blok,
  className,
  iconWidth = '',
}: {
  blok: any
  className?: string
  iconWidth?: any
}) => {
  const base = 'horizontal_card bg-base p-xl rounded-2xl flex flex-col gap-6'

  const splitBySpaces = blok.content_text.split('---')

  const isItAList = splitBySpaces.length > 1

  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div className="flex gap-3 items-center">
        {blok.icon_type && (
          <img
            className={`${iconWidth === '' ? 'w-[60px]' : iconWidth} `}
            src={`/icons/${blok.icon_type}.svg`}
            alt={blok.icon_type}
          />
        )}
        {blok.flag_type && (
          <img
            className="w-[32px]"
            src={`/flags/${blok.flag_type}.svg`}
            alt={blok.flag_type}
          />
        )}
        <h5 className="title-5 font-secondary">{blok.title_text}</h5>
      </div>
      <ul>
        {isItAList ? splitBySpaces.map((textItem: string, index: any) => <li className="mx-[24px] mb-[5px] paragraph-3" key={`a_${index}_list`}>{formatMarkdown(textItem, {
          bold: 'font-bold',
          italic: 'font-italic'
        })}</li>) : <p className="paragraph-3">{formatMarkdown(blok.content_text, {
          bold: 'font-bold',
          italic: 'font-italic'
        })}</p>}
      </ul>
      <div>
        {blok.button_area.map((button: any, i: number) => (
          <ButtonClear key={i} blok={button} />
        ))}
      </div>
    </div>
  )
}

export default HorizontalCard
