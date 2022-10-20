import React, { useState } from 'react'
import ArrowIcon from '../Details/ArrowIcon'
import NavegationContainer from './NavegationContainer';

type SearchIconProps = {
  menuOpen: boolean,
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
  innerLinkOpen: boolean,
  arrow_right: string,
}

export default function SearchIcon({ menuOpen, page, setInnerLink, innerLinkOpen, arrow_right }: SearchIconProps) {
  const [navegationOpen, setNavegationOpen] = useState(false);

  return (
    <>
      <div
        className={`${innerLinkOpen ? "relative" : "relative"} text-white text-[20px] ${menuOpen ? "bg-[#001F60]/100 nav-open" : " bg-[#001F60]/0 nav-close"}`}
        style={{
          zIndex: 10,
        }}
        onClick={() => {
          setNavegationOpen(!navegationOpen)
          setInnerLink(true)
        }}
      >
        <div className={'border-b-1 border-b-white/20 border-b-solid mx-[16px] p-[26px] flex items-center justify-between transition cursor-pointer'}>
          {page.label}
          <ArrowIcon arrow_right={arrow_right} color="" />
        </div>
      </div>
      <NavegationContainer setInnerLink={setInnerLink} navegationOpen={navegationOpen} page={page} setNavegationOpen={setNavegationOpen} />
    </>
  )
}
