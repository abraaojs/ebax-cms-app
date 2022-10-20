import React from 'react'

type PageToNavagateHeaderProps = {
  navegationOpen: boolean,
  setNavegationOpen: Function,
  page: {
    button: any,
    children: {
      _uid: string,
      icon: string,
      button: { text: string, link: { url: string } }[],
      links: any,
    }[],
    children_area: object[],
    description: string,
    link: object,
    title: string,
    url: object,
    label: string
  },
  setInnerLink: Function,
}


export default function PageToNavagateHeader({ navegationOpen, page, setNavegationOpen, setInnerLink }: PageToNavagateHeaderProps) {
  return (
    <div className="bg-[#001F60] px-[24px] pt-[54px] pb-[24px] rounded-b-[16px] flex justify-between  items-center w-full" style={{
      zIndex: 1,
    }}>
      <img src="/general_icons/breadcrumb-icon.svg" alt="breadcrumb-icon" onClick={() => {
        setNavegationOpen(!navegationOpen)
        setInnerLink(false)
      }} />
      <h3 className='text-[24px] font-secondary font-700 text-white'>{page.label}</h3>
      <div className='w-[32px]'></div>
    </div>
  )
}
