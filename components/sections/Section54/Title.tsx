import React from "react"

type TitleProps = {
  title: string,
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <h2 className="text-white title-7 font-secondary text-center max-w-[280px] mb-md md:text-start">{title}</h2>
  )
}

export default Title
