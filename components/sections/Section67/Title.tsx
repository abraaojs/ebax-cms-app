
import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

type TitleProps = {
  title: string
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <h2 className="title-2 font-primary mb-lg">
      {
        formatMarkdown(title, {
          bold: 'text-primary',
          italic: 'text-secondary'
        }
        )
      }
    </h2>
  )
}

export default Title

