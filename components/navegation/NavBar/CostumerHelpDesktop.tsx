import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
  pathLanguage: { language: string },
}

export default function CostumerHelpDesktop({ costumer_help, pathLanguage }: CostumerHelpProps) {
  const path = `/${pathLanguage.language}`
  return (
    <div className='w-full flex justify-center bg-base-3'>
      <div className={`px-md py-2 w-full bg-base-3 text-white hidden md:flex justify-end max-w-[1366px] items-center px-[128px] z-100 md:px-[40px]`}>
        <a className='font-400 text-[14px] mr-[8px] text-white' href={costumer_help[0].link}>{costumer_help[0].title}</a>
        |
        <img className="w-[24px] ml-[8px] bg-base-3 " src={`/general_icons/${costumer_help[0].dropdown_icon}_white.svg`} alt={costumer_help[0].dropdown_icon} />
        <select
          value={path}
          onChange={({ target }) => {
            const pathname = window.location.pathname
            const url = pathname.split('/').slice(2, pathname.length - 1).join('/')
            const finalPathname = `${target.value}/${url}`
            window.location.href = finalPathname
          }}
          className="w-[50px] bg-base-3 dark:placeholder-white border border-base-3 rounded-[5px] dark:bg-base-3 dark:border-base-3 dark:placeholder-white text-white dark:focus:ring-white dark:focus:border-none after:border-none text-[14px]">
          {costumer_help[0].dropdown.map((country: any) => <option key={country._uid} value={country.language_url.url} className="dark:placeholder-white text-white">{country.text.split(', ')[1]}</option>)}
        </select>
      </div>
    </div >

  )
}
