import React from "react"

type SubtitleProps = {
  subtitle: string,
}

const Subtitle = (props: SubtitleProps) => {
  const { subtitle } = props
  return (
    <p className="text-white text-center mb-3xl text-[10px] md:text-smd max-w-[230px] md:text-start md:max-w-[280px]" >{subtitle}</p>
  )
}

export default Subtitle
