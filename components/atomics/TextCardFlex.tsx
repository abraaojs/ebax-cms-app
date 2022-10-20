import React from 'react'
import ButtonClear from './ButtonClear'
import formatMarkdown from '../../hooks/useMarkdown'
import { colors_bg, colors_text } from '../../utils/colors.object'

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
  background_color: string,
  text_color: string
}

const TextCardFlex = ({
  blok,
  className,
  contentTextClass,
}: {
  blok: TextCardProps
  className?: string,
  contentTextClass?: string,
}) => {
  const base = ` text_card ${colors_bg[blok.background_color]}  rounded-xs flex flex-col p-xl justify-between ${colors_text[blok.text_color]}`
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div className="">
        {blok.tag_area && blok.tag_area.map((tag: any) => (
          <span className={`font-bold px-[8px] py-[4px] paragraph-4 w-auto bg-[#F0F4FD] rounded-xs`}>
            {tag.text}
          </span>
        ))}
        {blok.support_text && <h5 className="text-[16px] font-secondary mt-[8px]">{blok.support_text}</h5>}
        <h5 className={`!text-[16px] !font-700 font-secondary mb-lg ${contentTextClass}`} >{blok.title_text}</h5>
        {blok.content_text && <p className={contentTextClass + "text-[14px]"}>{formatMarkdown(blok.content_text, {
          bold: 'font-bold',
          italic: 'font-italic'
        })}</p>}
      </div>
      <div className={`[&>*>*]:color-${blok.text_color} [&>*>*]:text-[14px] mt-md`} >
        {blok.button_area.map((button: any, i: number) => (
          <a
            key={button._uid}
            href={button.link?.url ? button.link?.url : '#'}
            className={`uppercase text-primary font-bold cursor-pointer`}
          >
            <span>{button.text} {button.show_icon ? '⟶' : ''}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default TextCardFlex
