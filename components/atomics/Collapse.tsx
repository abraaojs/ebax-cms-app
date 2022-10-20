import React, { useState } from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

export type CollapseType = {
  title_text: string,
  content: any
}

const Collapse = ({
  blok,
  className
}: {
  blok: CollapseType
  className?: string
}) => {
  const [active, setActive] = useState(false)
  const base = `py-md px-xl bg-base-1 rounded-sm text-sm my-sm`
  const mobileTabContainerClass = `flex justify-between items-center font-bold hover:cursor-pointer`
  const tabTitleClass = `text-[16px] font-secondary `
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div
        className={mobileTabContainerClass}
        onClick={() => setActive(!active)}
      >
        <h1 className={tabTitleClass}>{blok.title_text}</h1>
        <i className="i-bi-chevron-down text-dark text-content-dark"></i>
      </div>
      {active && (
        <div className="py-md">
          {render(blok.content)}
        </div>
      )}
    </div>
  )
}

export default Collapse
