import React from 'react'
import ButtonClear from './ButtonClear'
import formatMarkdown from '../../hooks/useMarkdown';
import { colors_text, colors_bg } from '../../utils/colors.object'

const SquareCardFlex = ({ blok, className }: { blok: any; className?: string }) => {
  const bg = colors_bg[blok.background_color] ? colors_bg[blok.background_color] : ""
  const base = `p-xl rounded-2xl flex flex-col gap-lg ${bg}`
  const title_color = colors_text[blok.title_text[0].text_color] ? colors_text[blok.title_text[0].text_color] : ""
  const content_color = colors_text[blok.content_text[0].text_color] ? colors_text[blok.content_text[0].text_color] : ""
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div className="flex gap-3 items-center">
        <h3 className={`text-2xl font-secondary ${title_color} ${blok.title_text[0].font_family_topol ? 'font-primary' : 'font-secondary'}`}>
          {formatMarkdown(blok.title_text[0].text, {
            bold: 'font-700',
            italic: 'text-secondary'
          })}
        </h3>
      </div>
      <p className={`flex-1 ${content_color} ${blok.content_text[0].font_family_topol ? 'font-primary' : 'font-secondary'}`}>{formatMarkdown(blok.content_text[0].text, {
        bold: 'font-700',
        italic: 'text-secondary'
      })}</p>
      <div className="button_area">
        {blok.button_area.map((button: any, i: number) => (
          <ButtonClear key={i} blok={button} />
        ))}
      </div>
    </div>
  )
}

export default SquareCardFlex
