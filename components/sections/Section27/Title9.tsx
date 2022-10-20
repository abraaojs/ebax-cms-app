import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

type Title9Props = {
  title: string,
  title_font_topol: boolean
}

const Title9 = (props: Title9Props) => {
  const { title, title_font_topol } = props
  return (
    <div className="max-w-[280px] md:max-w-[400px]">
      <h2 className={`text-[40px] md:text-[55px] md:title-9 uppercase ${title_font_topol ? 'font-primary' : 'font-secondary'}`}>{
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


export default Title9


