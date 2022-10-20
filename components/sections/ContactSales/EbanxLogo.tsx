import React from 'react'

type EbanxLogoProps = {
  ebanx_logo: string,
}

const EbanxLogo = ({ ebanx_logo }: EbanxLogoProps) => {
  return (
    <img className='max-w-[104px] md:max-w-[162px] mb-xl md:mb-5xl' src={`/logo/${ebanx_logo}.svg`} alt={ebanx_logo} />
  )
}

export default EbanxLogo