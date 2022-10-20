import React from 'react'
import mergeClassString from '../../utils/merge.class.string'

const mobileButtonOutlineClass = `
  md:w-auto
`
const desktopButtonOutlineClass = `
  border-2 
  border-primary-dark 
  color-primary-dark 
  hover:bg-primary-dark
  hover:color-base 
  cursor-pointer 
  uppercase 
  py-md 
  px-lg 
  rounded-btn 
  w-full 
  text-center 
  max-w-md 
  font-bold 
  transition-all
`
const ButtonOutline = ({
  blok,
  className,
  link
}: {
  blok: any
  className?: string
  link?: string
}) => {
  return (
    <a
      className={`${mergeClassString(mobileButtonOutlineClass, desktopButtonOutlineClass)} ${className ? className : ''}`}
      href={link ? link : '#'}
    >
      {blok.text} {blok.show_icon ? '⟶' : ''}
    </a>
  )
}

export default ButtonOutline
