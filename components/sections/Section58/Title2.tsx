import React from "react"

type Title2Props = {
  title: string,
}

const Title2 = (props: Title2Props) => {
  const { title } = props
  return (
    <h3 className="font-secondary title-7 text-center text-base-3 my-xl font-700 lg:my-auto lg:text-start lg:mb-xl md:max-w-[80%]">{title}</h3>
  )
}

export default Title2
