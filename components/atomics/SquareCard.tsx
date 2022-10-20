import React from 'react'
import ButtonClear from './ButtonClear'

const SquareCard = ({ blok, className }: { blok: any; className?: string }) => {
  const base = 'p-xl rounded-2xl flex flex-col gap-lg bg-base'
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div className="flex gap-3 items-center">
        {blok.icon_type && <img src={`/flags/${blok.icon_type}.svg`} />}
        <h3 className="text-2xl font-secondary text-content-light">
          {blok.title_text}
        </h3>
      </div>
      <p className="text-content-light flex-1">{blok.content_text}</p>
      <div className="button_area">
        {blok.button_area.map((button: any, i: number) => (
          <ButtonClear key={i} blok={button} />
        ))}
      </div>
    </div>
  )
}

export default SquareCard
