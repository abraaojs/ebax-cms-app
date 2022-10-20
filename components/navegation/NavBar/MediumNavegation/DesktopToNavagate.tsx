import React from 'react'

type DesktopNavItemsProps = {
  setContainerClicked: Function,
  setContainerOpen: Function,
  page: {
    button: any,
    label: string,
    children: { _uid: string, link: { url: string } }[],
    children_area: object[],
    description: string,
    link: object,
    title: string,
    url: object,
  },
  containerClicked: any,
  containerOpen: boolean,
}


export default function DesktopNavItems({ page, setContainerClicked, setContainerOpen, containerClicked, containerOpen }: DesktopNavItemsProps) {
  const openCloseContainer = () => {
    if (containerClicked.label === page.label) {
      setContainerOpen(!containerOpen)
      return setContainerClicked(page)
    }
    setContainerOpen(true);
    setContainerClicked(page)
  }

  return (
    <div className='cursor-pointer' onClick={openCloseContainer}>
      <span className='mr-[5px]'>{page.label}</span>
      <img src="/general_icons/arrow-down.svg" alt="arrow-down" />
    </div>
  )
}
