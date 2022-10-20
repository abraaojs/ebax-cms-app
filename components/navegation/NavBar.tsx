import React, { useState } from 'react'
import useScript from '../../hooks/useScript'
import MenuHeader from './NavBar/MenuHeader'
import DesktopNavItems from './NavBar/MediumNavegation/DesktopNavItems'
import DesktopContainer from './NavBar/LargeNavegation/DesktopContainer'
import CostumerHelpDesktop from './NavBar/CostumerHelpDesktop'
import OpenMenuMobile from './NavBar/OpenMenuMobile'

type NavBarProps = {
  props: {
    menuOpen: boolean, setMenu: Function, setInnerLink: Function, innerLinkOpen: boolean,
    content: {
      ebanx_logo: string,
      children: {
        button: any,
        children: { _uid: string, link: { url: string } }[],
        children_area: object[],
        description: string,
        link: object,
        title: string,
        url: object,
        label: string,
      }[],
      language: string,
      costumer_help: {
        link: string,
        title: string,
        dropdown_icon: string,
        dropdown: object[],
        subtitle: string,
        network_icons: object[],
        network_links: { link: { url: string } }[]
      }[],
      button: object[],
      arrow_right: string,
    },
  }
  hidden: any
}

export default function NavBar({ props, hidden }: NavBarProps) {
  const [containerClicked, setContainerClicked] = useState({
    children: [],
    button: [],
    children_area: [],
    description: 'string',
    link: {},
    title: '',
    url: {},
    label: "",
  })
  const [containerOpen, setContainerOpen] = useState(false);
  const closeContainer = () => {
    setContainerOpen(false);
  }
  useScript('/js/sticky.js')
  const { menuOpen, setMenu, setInnerLink, innerLinkOpen, } = props
  const { ebanx_logo, children, costumer_help, button, arrow_right } = props.content
  console.log()
  return (
    <>
      <nav className={`z-100 md:bg-white w-[103%] md:w-[102%] lg:w-[101%] top-0 transition -mb-radius-primary select-none ${menuOpen ? "fixed md:w-[103%]  w-[103%] overflow-y-scroll md:overflow-y-scroll" : "fixed w-full"} ${hidden}`}>
        <CostumerHelpDesktop costumer_help={costumer_help} pathLanguage={props.content} />
        <div className={`${menuOpen ? 'min-h-screen md:min-h-auto' : ""} w-full `}>
          <MenuHeader
            innerLinkOpen={innerLinkOpen}
            menuOpen={menuOpen}
            setMenu={setMenu}
            ebanx_logo={ebanx_logo}
            button={button[0]}
            children={children}
            containerOpen={containerOpen}
            setContainerOpen={setContainerOpen}
            setContainerClicked={setContainerClicked}
            containerClicked={containerClicked}
          />
          <OpenMenuMobile arrow_right={arrow_right} menuOpen={menuOpen} innerLinkOpen={innerLinkOpen} setInnerLink={setInnerLink} children={children} costumer_help={costumer_help} pathLanguage={props.content} />
        </div>
        <DesktopNavItems children={children} />
      </nav >
      <DesktopContainer containerClicked={containerClicked} containerOpen={containerOpen} closeContainer={closeContainer} />
    </>
  )
}