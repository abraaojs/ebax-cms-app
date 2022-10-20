import React from 'react'
import ButtonClear from './ButtonClear'

const ImageCard = ({ blok, className }: { blok: any; className?: string }) => {
  const base = 'bg-base-3 p-md pt-[210px] rounded-2xl flex flex-col gap-lg bg-cover bg-bottom'
  const hasLogo = blok.logo || false
  return (
    <div
      className={`${base} ${className ? className : ''}`}
      style={{
        backgroundImage: `url(${blok.background_image.filename})`
      }}
    >
      <div className="flex flex-col gap-md bg-base p-xl rounded-xs h-full">
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
        <p className="text-content-light flex-1">{blok.content_text}</p>
        <div className="button_area">
          {blok.button_area.map((button: any, i: number) => (
            <ButtonClear key={i} blok={button} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCard
