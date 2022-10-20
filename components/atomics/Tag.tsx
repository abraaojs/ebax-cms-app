import React from 'react'

const Tag = ({
  blok,
  className,
  hiddeText,
}: {
  blok: any
  className?: string
  hiddeText: any
}) => {
  const base = `py-md px-xl bg-base-1 text-sm font-bold my-sm rounded-[32px] flex justify-between items-center gap-sm`
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div className={hiddeText ? "md:hidden" : ""}>{blok.text}</div>
      <div>
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6.50098L6 11.501L16 1.50098" stroke="#0051FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default Tag
