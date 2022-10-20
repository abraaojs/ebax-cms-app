import React from "react"

type TitleProps = {
  title: string,
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <h2 className="title-3 text-center mb-xl max-w-[250px] md:max-w-[600px] font-secondary">{title}</h2>
  )
}

export default Title
