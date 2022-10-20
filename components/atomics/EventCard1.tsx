import React from 'react'
import formatClassString from '../../utils/format.class.string'
import ButtonFilled, { ButtonFilledProps } from './ButtonFilled'
import ButtonOutline from './ButtonOutline'

type Logo = {
  filename: string
}

type ListIconText = {
  align: string,
  icon: string,
  text: string,
  link: {
    url: string
  },
}

export type TypeEventCard = {
  logo: Logo,
  list_of_icon_and_text: ListIconText[],
  button_area: ButtonFilledProps[],
  background_color: string,
  align_button: string,
  hidden_notch: boolean,
}
const textList = (blok: ListIconText) => {
  if (blok.link?.url) {
    return <a href={blok.link?.url}>{blok.text}</a>
  }
  return <div>{blok.text}</div>
}

const EventCard = ({
  blok,
  className,
  buttonClassName,
}: {
  blok: TypeEventCard
  className?: string
  buttonClassName?: string
}) => {
  const base = `
    text_card 
    bg-${blok.background_color} 
    rounded-xs 
    flex 
    flex-col
    p-md 
    justify-between
    relative
  `

  const listClass = `list-none`
  const listItemClass = `my-xl flex flex-row leading-[22px] `
  return (
    <div className={formatClassString(base + className)}>
      <div>
        <img src={blok.logo.filename} className="w-full" />
      </div>
      <ul className={listClass}>
        {
          blok.list_of_icon_and_text.map((text: ListIconText, i: number) => (
            <li key={i} className={listItemClass + text.align}>
              <img className="pr-md" src={`/general_icons/${text.icon}.svg`} />
              {textList(text)}
            </li>
          ))
        }
      </ul>
      <div className={`flex flex-col md:flex-${blok.align_button} gap-lg items-center md:items-start`}>
        {blok.button_area.map((button: any, i: number) => {
          if (button.type == 'filled') {
            return (
              <ButtonFilled
                key={i}
                blok={button}
                className={buttonClassName}
              />
            )
          }
          if (button.type == 'outline') {
            return (
              <ButtonOutline
                key={i}
                blok={button}
                className={buttonClassName}
              />
            )
          }
        })}
      </div>
      {
        !blok.hidden_notch && (
          <div className="notch absolute rotate-270 w-full md:flex justify-between top-[48%] left-[52%] hidden">
            <div className="w-radius-primary aspect-square"></div>
            <svg
              viewBox="0 0 167 30"
              className="fill-white h-full max-h-[30px] aspect-[167/30]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M57.26.8c32.27-.02 72-.04 101.3-.04C149.8 2.63 136 7.4 121.1 17.1c-12.46 8.14-23.93 11.92-35.12 11.79-11.18-.14-22.12-4.18-33.53-11.78-11.3-7.54-20.5-11.87-28.65-14.3a68.46 68.46 0 0 0-8.66-2L57.26.79Z" />
            </svg>
            <div className="w-radius-primary aspect-square"></div>
          </div>
        )
      }
    </div>
  )
}

export default EventCard
