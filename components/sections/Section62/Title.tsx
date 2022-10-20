import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'

const Title = ({
  title,
}: {
  title: string
}) => {
  return (
    <h2 className="text-[28px] md:text-[55px] text-center mb-[24px] uppercase max-w-[327px] md:max-w-[580px]">
      {formatMarkdown(title, {
        bold: 'text-primary',
        italic: 'text-secondary'
      })}
    </h2>
  )
}

export default Title
