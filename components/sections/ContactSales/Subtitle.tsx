import React from 'react'

type SubtitleProps = {
  subtitle: string,
}


const Subtitle = ({ subtitle }: SubtitleProps) => {
  return (
    <span className='text-xmd md:text-md md:max-w-full text-center mb-[8px] font-400 md:mr-[8px]'>{subtitle}</span>
  )
}

export default Subtitle 