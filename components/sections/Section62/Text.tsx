import React from 'react'

const Text = ({
  text,
  className,
}: {
  text: string,
  className: string,
}) => {
  return (
    <p className={`${className} text-[14px] text-center max-w-[327px] md:max-w-[800px]`}>
      {text}
    </p>
  )
}

export default Text
