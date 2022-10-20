import React from "react"

type TitleProps = {
  title: string,
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <h2 className="font-secondary title-7 text-center mb-lg md:mb-3xl pt-[58px] md:pt-[0px]">{title}</h2>
  )
}

export default Title
