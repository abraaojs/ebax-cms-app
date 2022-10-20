import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const mobileCardTextClass = `
  font-secondary
  text-center
  title-5
  md:max-w-[80%]
`

const desktopCardTextClass = `
md:text-left
`

const CardText = ({ card_text }: { card_text: string }) => {
  return (
    <h3 className={mergeClassString(mobileCardTextClass, desktopCardTextClass)}>
      {card_text}
    </h3>
  )
}

export default CardText
