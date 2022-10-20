import React from 'react'
import NavegationOption from './NavegationOption'

type NavegationOptionsProps = {
  children: { _uid: string, label: string }[], setContainerOpen: Function, setContainerClicked: Function,
}

export default function NavegationOptions({ children, setContainerOpen, setContainerClicked }: NavegationOptionsProps) {
  return (
    <div className='bg-white w-[50%] justify-around py-[16px] hidden md:hidden lg:flex font-secondary'>
      {children.map((page: { _uid: string, label: string }) => (
        <NavegationOption
          key={page._uid}
          page={page}
          setContainerOpen={setContainerOpen}
          setContainerClicked={setContainerClicked} />
      ))}
    </div>
  )
}
