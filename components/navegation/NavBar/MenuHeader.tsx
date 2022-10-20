import React from 'react'
import EbanxLogo from "./Details/EbanxLogo"
import ButtonFilled from '../../atomics/ButtonFilled'
import NavegationOptions from './LargeNavegation/NavegationOptions'

export default function MenuHeader({
  menuOpen,
  ebanx_logo,
  setMenu,
  button,
  children,
  setContainerOpen,
  setContainerClicked }: any) {
  return (
    <div className='flex  w-full justify-center shadow-lg shadow-sky-900/10'>
      <div className={`w-full max-w-[1366px] px-md py-[10px] md:px-[40px] md:py-[24px] transition ${menuOpen ? 'bg-[#001F60] md:bg-white opacity-100' : 'bg-base opacity-100'} duration-300 flex justify-between items-center  w-full`}>
        <EbanxLogo menuOpen={menuOpen} ebanx_logo={ebanx_logo} />
        <NavegationOptions
          children={children}
          setContainerOpen={setContainerOpen}
          setContainerClicked={setContainerClicked} />
        <div className="flex items-center">
          <div className={`rounded-[100%] md:bg-[#F0F4FD]  bg-white w-[56px] h-[56px] items-center justify-center mr-[5px] select-none cursor-pointer ${menuOpen ? "hidden md:flex" : "flex "}`}>
            <img src="/general_icons/search_icon.svg" alt="search icon" />
          </div>
          <div
            className={`rounded-[100%] transition duration-0 md:hidden ${menuOpen
              ? ''
              : 'bg-[#F0F4FD]'} w-[56px] h-[56px] flex items-center cursor-pointer justify-center `}
            onClick={() => setMenu(!menuOpen)}
          >
            {menuOpen ? <img src="/general_icons/close_icon.svg" /> : <img src="/general_icons/hamburguer_icon.svg" />}
          </div>
          <ButtonFilled className="hidden md:flex ml-[15px]" blok={button} />
        </div>
      </div>
    </div>
  )
}
