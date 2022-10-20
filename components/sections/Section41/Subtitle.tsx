import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import formatClassString from '../../../utils/format.class.string'

const desktopTitleClass = `
  paragraph-3
  max-w-4xl
  font-bold
  text-center
`

const Subtitle = ({
  subtitle,
}: {
  subtitle: string
}) => {
  return (
    <p className={formatClassString(desktopTitleClass)}>
      {subtitle}
    </p>
  )
}

export default Subtitle
