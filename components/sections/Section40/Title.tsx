
import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

type TitleProps = {
  title: string
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <div className="w-full flex max-w-[327px] my-[32px] mx-auto md:max-w-[502px] md:text-left md:mx-0">
      <h2 className="title-2 font-primary md:text-[55px]">
        {
          formatMarkdown(title, {
            bold: 'text-primary',
            italic: 'text-secondary'
          }
          )
        }
      </h2>
    </div>
  )
}

export default Title

