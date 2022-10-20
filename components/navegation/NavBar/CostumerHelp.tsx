import React from 'react'
import ArrowIcon from './Details/ArrowIcon'

type CostumerHelpProps = {
  costumer_help: {
    link: string,
    title: string,
    dropdown_icon: string,
    dropdown: object[],
    subtitle: string,
    network_icons: object[],
    network_links: { link: { url: string } }[]
  }[],
  arrow_right: string,
  pathLanguage: { language: string },
}

export default function CostumerHelp({ costumer_help, arrow_right, pathLanguage }: CostumerHelpProps) {
  const path = `/${pathLanguage.language}`
  return (
    <div className={`bg-[#F0F4FD] relative bottom-[32px] py-[48px] px-[38px]`} style={{
      zIndex: 1,
    }}>
      <a className='flex justify-between items-center mb-[26px] cursor-pointer' href={costumer_help[0].link}>
        <h4 className='font-secondary text-[20px] font-700 text-[#000E2B]'>{costumer_help[0].title}</h4>
        <ArrowIcon arrow_right={arrow_right} color="dark" />
      </a>
      <div className='flex items-center mb-[24px]'>
        <img className="w-[40px] absolute" src={`/general_icons/${costumer_help[0].dropdown_icon}.svg`} alt={costumer_help[0].dropdown_icon} />
        <select
          value={path}
          onChange={({ target }) => {
            const pathname = window.location.pathname
            const url = pathname.split('/').slice(2, pathname.length - 1).join('/')
            const finalPathname = `${target.value}/${url}`
            window.location.href = finalPathname
          }}
          className="md:hidden w-full bg-white border border-gray-300 rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block pr-[28px] py-[18px] pl-[40px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[16px] cursor-pointer">
          {costumer_help[0].dropdown.map((country: any) => <option value={country.language_url.url} key={country._uid} className="text-black">{country.text.split(', ')[0]}</option>)}
        </select>
      </div>
      <span className='text-[#000E2B] font-700 font-secondary text-[14px] block mb-[26px]'>{costumer_help[0].subtitle}</span>
      <div className='flex justify-between'>
        {costumer_help[0].network_icons.map((icon: any, index: number) => <a key={`${index}15s18dba`} className="cursor-pointer" href={costumer_help[0].network_links[index].link.url} target="_blank"><img className='w-[24px]' src={`/social_media_icons/${icon}.svg`} alt={icon} /></a>)}
      </div>
    </div>
  )
}
