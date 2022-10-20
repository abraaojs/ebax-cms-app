import React from "react"

type SubtitleProps = {
  subtitle: string,
}

const Subtitle = (props: SubtitleProps) => {
  const { subtitle } = props
  return (
    <h3 className='title-7 text-white mt-lg mb-2xl text-center mb-2xl font-secondary px-lg md:px-[0px]'>{subtitle}</h3>
  )
}

export default Subtitle
