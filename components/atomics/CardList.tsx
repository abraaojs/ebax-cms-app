
import React from 'react'
import PointsCard from "./PointsCard"

const CardList = (props: { text_group: object[], widthDesktop: string, hasBorder: boolean, fontSize: string, bg_card: string }) => {
  const { text_group, widthDesktop, hasBorder, fontSize, bg_card } = props

  return (
    <>
      {text_group.map((points: any, index) => <PointsCard key={index} fontSize={fontSize} points={points} bg_card={bg_card} border={hasBorder} widthDesktop={widthDesktop} />)}
    </ >
  )
}

export default CardList
