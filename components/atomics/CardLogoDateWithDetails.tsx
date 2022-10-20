import React from 'react'
import ButtonClear from './ButtonClear'

type Image = {
  filename: string
}

export type CardLogoDateWithDetailsProps = {
  logo?: Image,
  title_text: string,
  details: string,
  date: string,
  button_area: {
    link: {
      url: string
    },
    text: string,
  }[],
}

const CardLogoDateWithDetails = ({
  blok,
  className,
  contentTextClass,
}: {
  blok: CardLogoDateWithDetailsProps
  className?: string,
  contentTextClass?: string,
}) => {
  const base = `text_card bg-base text-content-light rounded-xs flex flex-col gap-6 p-xl justify-between`
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div>
        <p className={`paragraph-4 font-bold text-primary-extralight mb-md`} >{blok.date}</p>
        <h3 className={`title-5 font-bold`} >{blok.title_text}</h3>
      </div>
      <p className={`paragraph-3`} >{blok.details}</p>
      {blok.button_area.map((button: any, i: number) => (
        <ButtonClear key={i} blok={button} />
      ))}
    </div >
  )
}

export default CardLogoDateWithDetails
