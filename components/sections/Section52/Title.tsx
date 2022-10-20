import React from "react"

type TitleProps = {
  title: string,
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <h3 className="text-center title-7 font-secondary mb-2xl text-tertiary relative pt-4xl max-w-[766px] md:mb-lg">{title}</h3>
  )
}

export default Title
