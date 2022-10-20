import React from 'react'
import ButtonClear from './ButtonClear'

const VerticalCard = ({
  blok,
  className
}: {
  blok: any
  className?: string
}) => {
  const base = 'bg-white p-8 rounded-2xl flex flex-col gap-8'
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div className="flex flex-col gap-4 items-center">
        <img
          className="w-[60px]"
          src={`/icons/${blok.icon_type}.svg`}
          alt={blok.icon_type}
        />
        <h3 className="inter-text-subtitle1-bold text-primary-dark-blue">
          {blok.title_text}
        </h3>
      </div>
      <div className="flex flex-col items-center flex-1">
        {blok.content_images.map(
          ({ filename }: { filename: string }, i: number) => (
            <div key={i} className="w-full py-2 flex justify-center">
              <img src={filename} alt="" />
            </div>
          )
        )}
      </div>
      <div className="flex flex-col gap-4">
        <hr className="bg-base-4" />
        <div className="flex flex-col items-center">
          {blok.button_area.map((button: any, i: number) => (
            <ButtonClear key={i} blok={button} uppercase={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VerticalCard
