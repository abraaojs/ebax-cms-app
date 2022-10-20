import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopImageClass = ``
const mobileImageClass = `
  image 
  h-[242px] 
  bg-cover 
  rounded-xs
`

const ImageBackground = ({
  backgroundImage,
  backgroundPosition
}: {
  backgroundImage: string,
  backgroundPosition: string
}) => {
  return (
    <div
      className={mergeClassString(mobileImageClass, desktopImageClass)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: backgroundPosition
      }}
    />
  )
}

export default ImageBackground
