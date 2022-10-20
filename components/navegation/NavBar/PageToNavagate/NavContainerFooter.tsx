import React from 'react'

type NavegationCardProps = {
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
    label: string,
  }
}

export default function NavContainerFooter({ page }: NavegationCardProps) {
  return (
    <div className='mx-[20px] mx-[12px] pb-[32px]'>
      <a
        href={page.button[0].link?.url ? page.button[0].link?.url : '#'}
        className={` `}
      >
        <span className='mx-[12px] text-[#0051FF] font-secondary text-[16px] font-700 button-arrow-icon'>{page.button[0].text}</span>
      </a>
      <p className='mx-[12px] font-400 block text-[12px] mt-[10px]' >{page.description}</p>
    </div>
  )
}
