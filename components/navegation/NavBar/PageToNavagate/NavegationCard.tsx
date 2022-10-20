import React from 'react'
import { Link } from '../../../../renderer/Link'

type NavegationCardProps = {
  innerLink: {
    _uid: string,
    icon: string,
    button: { text: string, link: { url: string } }[],
    links: object[]
  }
}

export default function NavegationCard({ innerLink }: NavegationCardProps) {
  return (

    <div key={innerLink._uid} className='bg-[#F0F4FD] rounded-[10px] p-[16px] mb-[16px] md:mr-[16px] lg:mr-[px] md:w-[280px] md:min-h-[264px]'>
      <div className='flex'>
        <img className='max-w-[24px] md:mr-[5px]' src={`/icons/${innerLink.icon}.svg`} />
        <a
          href={innerLink.button[0].link?.url ? innerLink.button[0].link?.url : '#'}
          className={`text-[#0051FF] font-secondary text-[16px] lg:text-[16px] font-700 block`}
        >
          <span className='mx-[4px] md:mx-[2px] lg:mx-[2px] button-arrow-icon'>{innerLink.button[0].text}</span>
        </a>
      </div>
      <div className='flex flex-col pb-[16px] px-[4px]'>
        {innerLink.links.map((navegationPoint: any) => (
          <Link key={navegationPoint._uid} href={navegationPoint.link.url} className="text-[#535353] font-400 text-[14px] mt-[24px]"> {navegationPoint.title}</Link>
        ))}
      </div>
    </div>

  )
}
