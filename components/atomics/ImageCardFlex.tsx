import React from 'react'
import { colors_bg, colors_text } from '../../utils/colors.object';
import formatMarkdown from '../../hooks/useMarkdown';
import ButtonClear from './ButtonClear'

const ImageCardFlex = ({ blok, className, card_background_color, card_text_color }: { blok: any; className?: string, card_background_color: string, card_text_color: string }) => {
  const base = 'bg-base-3 p-md pt-[210px] rounded-2xl flex flex-col gap-lg bg-cover bg-bottom'
  const hasLogo = blok.logo || false
  return (
    <div
      className={`${base} ${className ? className : ''}`}
      style={{
        backgroundImage: `url(${blok.background_image.filename})`
      }}
    >
      <div className={`flex flex-col text-red gap-md ${colors_bg[card_background_color]} p-xl rounded-xs h-full`}>
        {hasLogo && (
          <div>
            <img
              src={`/logo/${blok.logo}.svg`}
              alt={blok.logo}
              className="max-w-full max-h-[54px]"
            />
          </div>
        )}
        {blok.title_text && (
          <h3 className="text-2xl font-secondary text-content-light">
            {blok.title_text}
          </h3>
        )}
        <p className={`text-content-light flex-1 ${colors_text[card_text_color]}`}>{formatMarkdown(blok.content_text, {
          bold: 'font-bold',
          italic: 'font-italic'
        })}</p>
        <div className="button_area">
          {blok.button_area.map((button: any, i: number) => (
            <ButtonClear key={i} blok={button} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCardFlex
