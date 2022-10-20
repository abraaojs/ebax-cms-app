import React, { useState } from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import Tab from '../atomics/Tab/Tab'
import useScript from '../../hooks/useScript'

const Section17 = ({ blok }: { blok: any }) => {
  const desktopTabContainerClass = `hidden md:block md:bg-white md:p-8 md:mr-6 md:max-w-[290px] md:rounded-2xl drop-shadow-md`
  const [desktopTabItemWhichIsActive, setDesktopTabItemWhichIsActive] =
    useState(0)
  const desktopTabTitle = `md:flex md:justify-between  md:p-4 md:cursor-pointer md:rounded-xl	`

  useScript('/js/hubspot.js')
  return (
    <section
      className={`
    section_17 
    bg-base-2 
    text-content-light 
    rounded-b-sct
    p-6
    pb-18
    `}
      style={{ zIndex: -blok.zIndex }}
    >
      <div
        className="
      flex
      flex-col
      items-center
      "
      >
        <h2 className="font-primary title-2 mt-16 mb-2 max-w-[12rem] md:max-w-[35rem] text-center ">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}{' '}
        </h2>
        <p className="max-w-[22.5rem] leading-6	text-sm mb-14 font-bold text-center md:text-[1.125rem]">
          {blok.subtitle_text}
        </p>
      </div>
      <div className={`md:flex md:flex-row  md:justify-center `}>
        <div className={desktopTabContainerClass}>
          <div className="pb-4 font-bold text-sm	leading-[22px]">
            <p className="">{blok.floating_sidebar[0].title}</p>
          </div>
          {blok.sidebar_area.map(({ title_text }: any, i: number) => (
            <div
              key={i}
              className={`${desktopTabTitle} ${
                desktopTabItemWhichIsActive === i ? 'bg-base-2' : 'bg-white'
              }`}
              onClick={() => setDesktopTabItemWhichIsActive(i)}
            >
              <p>{title_text}</p>
              <span
                className={`font-bold text-primary ml-xs ${
                  desktopTabItemWhichIsActive === i ? 'inline' : 'hidden'
                }`}
              >
                ⟶
              </span>
            </div>
          ))}
        </div>
        {blok.sidebar_area.map((tab: any, i: number) => (
          <div className={`mb-4`} key={tab._uid}>
            <Tab
              props={{
                ...tab,
                isActiveOnDesktop: i === desktopTabItemWhichIsActive
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section17
