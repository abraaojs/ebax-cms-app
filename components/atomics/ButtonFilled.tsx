import React from 'react'

export type ButtonFilledProps = {
  blok: {
    text: string,
    show_icon: string,
  },
  link: string,
  className?: string
}


const ButtonFilled = ({
  blok,
  className,
  link
}: ButtonFilledProps | any) => {
  const base = `bg-primary hover:bg-primary-focus cursor-pointer uppercase py-md px-lg 
                rounded-btn w-full md:w-auto text-center text-content-dark max-w-md font-bold`
  return (
    <a
      className={`${base} ${className ? className : ''}`}
      href={blok.link?.url ? blok.link?.url : '#'}
    >
      {blok.text} {blok.show_icon ? '⟶' : ''}
    </a>
  )
}

export default ButtonFilled
