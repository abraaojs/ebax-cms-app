import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

type ImageProps = {
  filename: string,
}

const desktopImageClass = `
  image 
  h-[340px] 
  relative 
  bg-cover 
  bg-center 
  mt-xl 
  px-[0]
  w-full
`
const mobileImageClass = `
  md:flex 
  md:flex-row 
  md:relative 
  md:left-[-1%]
  md:rounded-r-xs 
  md:h-auto 
  md:w-[67%]
`

const Image = ({
  image,
}: {
  image: ImageProps
}) => {
  return (
    <div
      className={mergeClassString(mobileImageClass, desktopImageClass)}
      style={{
        backgroundImage: `url(${image.filename})`,
        zIndex: 0
      }}>
    </div>
  )
}

export default Image
