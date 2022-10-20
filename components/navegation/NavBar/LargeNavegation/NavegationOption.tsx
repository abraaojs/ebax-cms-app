import React from 'react'

type NavegationOptionProps = {
  page: { _uid: string, label: string },
  setContainerOpen: Function,
  setContainerClicked: Function,
}

export default function NavegationOption({
  page,
  setContainerOpen,
  setContainerClicked }: NavegationOptionProps) {

  const openContainer = () => {
    setContainerOpen(true);
    setContainerClicked(page)
  }

  return (
    <div className='cursor-pointer' onMouseEnter={openContainer}>
      <span className='mr-[5px]'>{page.label}</span>
      <img src="/general_icons/arrow-down.svg" alt="arrow-down" />
    </div>
  )
}
