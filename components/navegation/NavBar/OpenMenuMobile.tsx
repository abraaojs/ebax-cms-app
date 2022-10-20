import React from 'react'
import BottomDetail from './Details/BottomDetail'
import CostumerHelp from "./CostumerHelp"
import PageToNavegate from "./PageToNavagate/PageToNavagate"


export default function OpenMenuMobile({ menuOpen, innerLinkOpen, setInnerLink, children, costumer_help, arrow_right, pathLanguage }: any) {
  return (
    <div className={` ${menuOpen ? "nav-open" : "nav-close"} absolute w-full md:hidden h-screen bg-[#F0F4FD]/100`}>
      {children.map((page: any) => <PageToNavegate arrow_right={arrow_right} innerLinkOpen={innerLinkOpen} setInnerLink={setInnerLink} key={page._uid} page={page} menuOpen={menuOpen} />)}
      <BottomDetail />
      <CostumerHelp arrow_right={arrow_right} costumer_help={costumer_help} pathLanguage={pathLanguage} />
    </div>
  )
}
