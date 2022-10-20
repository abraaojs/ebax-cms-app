import React from "react"

type TitleProps = {
  title: string,
}

const Title = (props: TitleProps) => {
  const { title } = props
  return (
    <h2 className='text-white title-1 mt-lg text-center px-lg md:px-[0px]'>{title}</h2>
  )
}

export default Title
