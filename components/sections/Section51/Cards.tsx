import React from "react"
import ListHorizontalCard from '../../atomics/ListHorizontalCard'

type CardsProps = {
  horizontal_cads: any,
}

const Cards = (props: CardsProps) => {
  const { horizontal_cads } = props
  return (
    <div className='md:flex justify-center px-lg md:px-[0px] text-tertiary'>
      {horizontal_cads.map((card: any) => <ListHorizontalCard key={card._uid} blok={card} />)}
    </div>
  )
}

export default Cards
