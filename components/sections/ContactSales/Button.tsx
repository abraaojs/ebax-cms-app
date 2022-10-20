import React from 'react'

type ButtonProps = {
  button: {
    link: { url: string },
    text: string,
  }
}

const Button = ({ button }: ButtonProps) => {
  return (
    <a
      href={button.link?.url ? button.link?.url : '#'}
      className={`text-secondary-extradark text-xmd font-700`}
    >
      <span>{button.text}</span>
      <span className="font-bold ml-xs md:ml-[0px] ">⟶</span>
    </a>

  )
}

export default Button