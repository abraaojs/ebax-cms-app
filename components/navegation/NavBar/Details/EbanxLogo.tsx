import React from 'react'
import { Link } from '../../../../renderer/Link'

type EbanxLogoProps = {
  menuOpen: boolean,
  ebanx_logo: string,
}

export default function EbanxLogo({ menuOpen, ebanx_logo }: EbanxLogoProps) {
  return (
    <Link href="/en">
      {menuOpen
        ? (
          <>
            <img className="w-[104px] md:w-[162px] md:h-[30px] h-[18px] select-none cursor-pointer md:hidden" src={`/logo/${ebanx_logo}_white.svg`} alt={ebanx_logo} />
            <img className="w-[104px] md:w-[162px] md:h-[30px] h-[18px]  select-none cursor-pointer hidden md:block" src={`/logo/${ebanx_logo}.svg`} alt={ebanx_logo} />
          </>
        )
        : <img className="w-[104px] h-[18px] md:w-[162px] md:h-[30px] select-none cursor-pointer" src={`/logo/${ebanx_logo}.svg`} alt={ebanx_logo} />
      }
    </Link>
  )
}
