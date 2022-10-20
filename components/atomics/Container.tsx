import React from 'react'

const Container = ({
  children,
  paddingX,
}: {
  children: any,
  paddingX: string,
}) => {
  return (
    <div className={`${paddingX} max-w-[1366px] mx-auto`}>
      {children}
    </div>
  )
}

export default Container
