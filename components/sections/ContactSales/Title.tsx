import React from 'react'
import formatMarkdown from "../../../hooks/useMarkdown"

type TitleProps = {
  title: string,
}

const Title = ({
  title
}: TitleProps) => (
  <h2 className='text-lg2 md:text-lgx font-primary font-700 text-center max-w-[280px] md:max-w-[450px]'>
    {formatMarkdown(title, {
      bold: 'text-primary',
      italic: 'text-secondary'
    })}
  </h2>
)

export default Title
