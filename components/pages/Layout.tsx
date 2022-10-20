import React, { useState } from 'react'
import NavBar from '../navegation/NavBar'
import Footer from '../navegation/Footer'

export default function Layout({
  children,
  props
}: {
  children: React.ReactNode
  props: any
}) {
  const [menuOpen, setMenu] = useState(false);
  const [innerLinkOpen, setInnerLink] = useState(false);
  return (
    <div className={`stack ${menuOpen ? "fixed md:relative" : ""} overflow-x-hidden w-[100%] relative ${props.story.slug === 'contact-sales' ? '' : " md:pt-[180px] lg:pt-14xl pt-5x2"}`}>
      <NavBar props={{ ...props?.nav_bar, menuOpen, setMenu, innerLinkOpen, setInnerLink }} hidden={`${props.story.slug === 'contact-sales' ? '!hidden' : ""}`} />
      <div className={`flex-1`}>{children}</div>
      <Footer props={props?.footer} hidden={`${props.story.slug === 'contact-sales' ? '!hidden' : ""}`} />
    </div>
  )
}