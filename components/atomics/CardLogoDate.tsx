import React from 'react'
import ButtonClear from './ButtonClear'

type Image = {
  filename: string
}

export type CardLogoDateProps = {
  title_text: string,
  date: string,
  button_area: {
    link: {
      url: string
    },
    text: string,
  }[],
  logo: Image,
}

const CardLogoDate = ({
  blok,
  className,
  contentTextClass,
}: {
  blok: CardLogoDateProps
  className?: string,
  contentTextClass?: string,
}) => {
  const base = `text_card bg-base-1 rounded-xs text-content-light flex flex-col gap-6 p-xl justify-between`
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div
        className={`image h-[100px] bg-cover rounded-xs`}
        style={{
          backgroundImage: `url(${blok.logo.filename})`,
        }}
      />
      <div>
        <h3 className={`text-[20px] font-bold mb-sm`} >{blok.title_text}</h3>
        <p className={`paragraph-4 font-bold text-primary-extralight`} >{blok.date}</p>
      </div>
      {blok.button_area.map((button: any, i: number) => (
        <ButtonClear key={i} blok={button} />
      ))}
    </div >
  )
}

export default CardLogoDate
