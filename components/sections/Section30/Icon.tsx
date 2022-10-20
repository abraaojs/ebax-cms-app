import React from "react"

type IconImageProps = {
  icon_type: string,
  marginAuto: boolean,
}

const Icon = (props: IconImageProps) => {
  const { icon_type, marginAuto } = props
  return (
    <img
      className={`w-[40px] ${marginAuto ? 'mx-auto' : ''} flex items-center pt-[64px] md:pt-[96px] mb-[16px] md:w-[60px] md:my-[24px] md:pt-auto`}
      src={`/icons/${icon_type}.svg`}
      alt={icon_type}
    />
  )
}

export default Icon