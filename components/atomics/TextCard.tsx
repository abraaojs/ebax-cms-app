import React from 'react'
import ButtonClear from './ButtonClear'

export type TextCardProps = {
  support_text?: string,
  title_text: string,
  button_area: {
    link: {
      url: string
    },
    text: string,
  }[],
  content_text?: string,
  theme?: string,
  tag_area: any[]
}

const TextCard = ({
  blok,
  className,
  contentTextClass,
}: {
  blok: TextCardProps
  className?: string,
  contentTextClass?: string,
}) => {
  const DARK_THEM = {
    backgroundColor: 'bg-primary-extradark',
    textColor: 'color-base',
  }
  const isThemeDark = blok.theme === "dark"
  const darkBase = isThemeDark ? (DARK_THEM.backgroundColor + " " + DARK_THEM.textColor) : ""
  const base = ` ${darkBase} text_card ${blok.theme == 'primary-color-blue-10' ? 'bg-base-1' : 'bg-base'} text-content-light rounded-xs flex flex-col p-xl justify-between`
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div className="">
        {blok.tag_area && blok.tag_area.map((tag: any) => (
          <span key={tag._uid} className={`font-bold px-[8px] py-[4px] paragraph-4 w-auto bg-[#F0F4FD] rounded-xs`}>
            {tag.text}
          </span>
        ))}
        {blok.support_text && <h5 className="text-[16px] font-secondary mt-[8px]">{blok.support_text}</h5>}
        <h5 className={`!text-[16px] font-secondary !font-700 mb-lg ${contentTextClass}`} >{blok.title_text}</h5>
        {blok.content_text && <p className={contentTextClass + "text-[14px"}>{blok.content_text}</p>}
      </div>
      <div className={isThemeDark ? "[&>*>*]:color-base-DEFAULT [&>*>*]:text-[14px] mt-md" : "mt-md"} >
        {blok.button_area.map((button: any, i: number) => (
          <ButtonClear key={i} blok={button} />
        ))}
      </div>
    </div>
  )
}

export default TextCard
