import React from 'react'

type ArrowProps = {
  color: string,
  arrow_right: string,
}

export default function ArrowIcon({ color, arrow_right }: ArrowProps) {
  return (
    <img src={`/general_icons/${arrow_right}${color.length ? `_${color}` : ""}.svg`} alt={arrow_right} />
  )
}
