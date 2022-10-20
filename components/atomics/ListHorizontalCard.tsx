import React from 'react'
import ButtonClear from './ButtonClear'

const ListHorizontalCard = ({
  blok,
  className
}: {
  blok: any
  className?: string
}) => {
  const base = 'horizontal_card bg-base p-xl rounded-2xl flex flex-col gap-6 h-full justify-between'
  return (
    <section className={`${base} ${className ? className : ''} mb-lg min-h-[276px] md:min-h-[400px] lg:min-h-[350px] md:w-[394px] md:mr-lg `}>
      <div>
        <div className="flex gap-3 items-center">
          <img
            className="w-[60px]"
            src={`/icons/${blok.icon}.svg`}
            alt={blok.icon}
          />
          <h3 className="text-[20px] md:text-[24px] font-secondary">{blok.title}</h3>
        </div>
        <ul className='justify-self-start mt-[24px]'>
          {blok.list.map((textItem: any) => blok.list.length === 1 ? <p key={textItem._uid} className="paragraph-3">{textItem.content}</p> : <li key={textItem._uid} className="paragraph-3 mx-[20px]">{textItem.content}</li>)}
        </ul>
      </div>
      <div className=''>
        <ButtonClear blok={blok.button[0]} />
      </div>
    </section>
  )
}

export default ListHorizontalCard
