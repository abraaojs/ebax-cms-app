import React from 'react'
import PageToNavagateHeader from './PageToNavagateHeader'
import NavegationCard from './NavegationCard'
import NavContainerFooter from './NavContainerFooter'

type NavegationCardProps = {
  navegationOpen: boolean,
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
  setNavegationOpen: Function,
  setInnerLink: Function,
}

export default function NavegationContainer({ navegationOpen, page, setNavegationOpen, setInnerLink }: NavegationCardProps) {
  return (
    <div className={`bg-white w-[100%] ${navegationOpen ? "fixed md:hidden opacity-100 z-100 left-[0%]  nav-open" : "opacity-0 left-[100%] nav-close fixed"} absolute top-[0px] scroll-smooth`} style={{
      zIndex: 100,
    }}>
      <PageToNavagateHeader setInnerLink={setInnerLink} navegationOpen={navegationOpen} page={page} setNavegationOpen={setNavegationOpen} />
      <div className='bg-white relative left-[10px] top-[-10px] pb-[150px] pt-[64px] px-[24px] md:px-[16px] min-h-screen max-h-[100vh]  overflow-y-scroll ' style={{
        zIndex: -10,
      }}>
        {page.children.map((innerLink: {
          _uid: string,
          icon: string,
          button: { text: string, link: { url: string } }[],
          links: any,
        }) => (
          <NavegationCard key={innerLink._uid} innerLink={innerLink} />
        ))}
        <NavContainerFooter page={page} />
      </div>
    </div>
  )
}
