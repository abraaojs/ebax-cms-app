import React from 'react'
import NavegationCard from '../PageToNavagate/NavegationCard';
import NavContainerFooter from '../PageToNavagate/NavContainerFooter';

type DesktopContainerProps = {
  containerClicked: {
    button: any,
    children: { _uid: string, link: { url: string }, icon: string, button: { text: string, link: { url: string } }[], links: any }[],
    children_area: object[],
    description: string,
    link: object,
    title: string,
    url: object,
    label: string,
  },
  containerOpen: boolean,
  closeContainer: any,
}

export default function DesktopContainer({ containerClicked, containerOpen, closeContainer }: DesktopContainerProps) {

  return (
    <section
      className={`justify-center hidden w-full md:hidden duration-300  lg:fixed h-screen z-30 ${containerOpen ? " bg-gray/30  open-container" : " bg-gray/0 close-container"}  lg:flex items-start`}
      onDoubleClick={closeContainer}
    >
      <div className='bg-black w-full h-screen opacity-0' onMouseEnter={closeContainer}>

      </div>
      <div className={` bg-white min-w-[820px]  mt-[40px] mb-[30px] p-[32px] duration-300 rounded-[8px] transition z-1 flex-col justify-center`}
        onMouseLeave={closeContainer}>
        <div className='flex '>
          {containerClicked.children.map((innerLink: {
            _uid: string,
            icon: string,
            button: { text: string, link: { url: string } }[],
            links: any,
          }) => (
            <NavegationCard key={innerLink._uid} innerLink={innerLink} />
          ))}
        </div>
        {containerOpen && <NavContainerFooter page={containerClicked} />}
      </div>
      <div className='bg-black w-full h-screen  opacity-0' onMouseEnter={closeContainer} >

      </div>
    </section>
  )
}
