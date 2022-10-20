import React from 'react'

const Quote = ({
  blok,
  className
}: {
  blok: any
  className?: string
}) => {
  const base = 'quote bg-base-1 rounded-xs flex gap-md relative'
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <div className="absolute left-xl -translate-y-1/2 top-0 h-[40px] w-[40px]">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.500977" width="40" height="40" rx="20" fill="#0051FF" />
          <path d="M11.9686 28.0529L11.6145 24.5399C11.507 23.473 11.5815 22.3221 11.8382 21.087C12.1066 19.8377 12.5487 18.6168 13.1645 17.4244C13.792 16.2177 14.5843 15.1455 15.5412 14.2079L18.2439 15.9858C17.5422 17.2394 16.9499 18.5346 16.4669 19.8713C15.9956 21.1937 15.8328 22.577 15.9783 24.0212L16.3403 27.6123L11.9686 28.0529ZM21.961 27.0457L21.607 23.5328C21.4994 22.4659 21.574 21.3149 21.8306 20.0798C22.099 18.8305 22.5411 17.6096 23.1569 16.4172C23.7845 15.2105 24.5767 14.1383 25.5337 13.2007L28.2364 14.9786C27.5347 16.2322 26.9424 17.5274 26.4594 18.8641C25.9881 20.1865 25.8252 21.5698 25.9708 23.0141L26.3327 26.6051L21.961 27.0457Z" fill="white" />
        </svg>
      </div>
      <h3 className="font-secondary text-[24px]">"{blok.quote_text}"</h3>
      <span className="text-[14px]">{blok.author_text}</span>
    </div>
  )
}

export default Quote
