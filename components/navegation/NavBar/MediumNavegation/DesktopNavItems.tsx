import React, { useState } from 'react'
import DesktopToNavegate from "./DesktopToNavagate"
import NavegationCard from '../PageToNavagate/NavegationCard';
import NavContainerFooter from '../PageToNavagate/NavContainerFooter';

type DesktopNavItemsProps = {
  children: {
    button: any,
    children: { _uid: string, link: { url: string } }[],
    children_area: object[],
    description: string,
    link: object,
    title: string,
    url: object,
  }[]
}

export default function DesktopNavItems({ children }: DesktopNavItemsProps) {
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

  return (
    <>
      <div className='bg-white w-[100%] relative z-0 justify-around py-[16px] border-t-[#F0F4FD] border-t-1 border-t-solid hidden md:flex lg:hidden'>
        {children.map((page: any) => (
          <DesktopToNavegate
            key={page._uid}
            page={page}
            containerOpen={containerOpen}
            setContainerOpen={setContainerOpen}
            setContainerClicked={setContainerClicked}
            containerClicked={containerClicked} />
        ))}
      </div>
      <section className={`justify-center h-screen items-start ${containerOpen ? " open-container-medium bg-gray/30" : "close-container-medium"}  z-[-1] hidden lg:hidden w-full md:flex md:fixed lg:hidden`}>
        <div className={` bg-white lg:w-[820px] md:w-[720px] md:mt-[41px] p-[32px] rounded-[8px] transition flex-col justify-center`}>
          <div className='flex '>
            {containerClicked.children.map((innerLink: {
              _uid: string;
              icon: string;
              button: {
                text: string;
                link: {
                  url: string;
                };
              }[];
              links: object[];
            }) => (
              <NavegationCard key={innerLink._uid} innerLink={innerLink} />
            ))}
          </div>
          {containerOpen && <NavContainerFooter page={containerClicked} />}
        </div>
      </section>
    </>
  )
}
