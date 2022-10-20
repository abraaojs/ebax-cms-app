import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopAdviceTextClass = `
`
const mobileAdviceTextClass = `
  paragraph-1
  font-secondary
  text-center
  self-center	
`

const AdviceText = ({ advice_text }: { advice_text: string }) => {
  return (
    <p
      className={mergeClassString(
        mobileAdviceTextClass,
        desktopAdviceTextClass
      )}
    >
      {advice_text}
    </p>
  )
}

export default AdviceText
