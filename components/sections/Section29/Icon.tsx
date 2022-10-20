import React from "react"

type IconImageProps = {
  icon_type: string,
  marginAuto: boolean,
}

const Icon = (props: IconImageProps) => {
  const { icon_type, marginAuto } = props
  return (
    <img
      className={`w-[40px] ${marginAuto ? '' : ''} flex items-center md:w-[60px] md:my-[24px] mr-[16px]`}
      src={`/icons/${icon_type}.svg`}
      alt={icon_type}
    />
  )
}

export default Icon