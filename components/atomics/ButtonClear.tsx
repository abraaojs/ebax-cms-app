import React from 'react'

export type ButtonClearProps = {
  text: string,
  url?: string,
  color: "primary" | "secondary",
  show_icon: boolean,
  type: "clear",
}

const ButtonClear = ({
  blok,
  uppercase = true,
  className,
  link
}: {
  blok: any
  uppercase?: boolean
  className?: string
  link?: string
}) => {
  const base = 'text-primary font-bold cursor-pointer'
  return (
    <a
      href={blok.link?.url ? blok.link?.url : '#'}
      className={`${base} ${className ? className : ''} ${uppercase ? 'uppercase' : ''
        }`}
    >
      <span>{blok.text} {blok.show_icon ? '⟶' : ''}</span>
    </a>
  )
}

export default ButtonClear
