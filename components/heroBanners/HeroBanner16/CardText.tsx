import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopTitleClass = `
`
const mobileTitleClass = `
card_text paragraph-2 max-w-2xl font-bold text-center self-center
`

const CardText = ({
  card_text,
}: {
  card_text: string
}) => {
  return (
    <p className={mergeClassString(mobileTitleClass, desktopTitleClass)}>
      {card_text}
    </p>
  )
}

export default CardText
