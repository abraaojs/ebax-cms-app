import React from 'react'

const SimpleCard = ({
  blok,
  className
}: {
  blok: any
  className?: string
}) => {
  const base = 'simple_card bg-base rounded-xs flex gap-md items-center'
  return (
    <div className={`${base} ${className ? className : ''}`}>
      <img
        className="w-[60px]"
        src={`/icons/${blok.icon_type}.svg`}
        alt={blok.icon_type}
      />
      <h3 className="title-6 font-secondary">{blok.title_text}</h3>
    </div>
  )
}

export default SimpleCard
