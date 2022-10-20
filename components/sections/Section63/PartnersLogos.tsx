import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'

const desktopSubtitleClass = `
md:justify-center
`
const mobileSubtitleClass = `
partner_logos flex gap-lg justify-start max-w-full line hide-scrollbar
`

type ILogoProps = {
  filename?: string
  alt?: string
  id?: string
}

const PartnersLogos = ({
  partners_logos
}: {
  partners_logos: ILogoProps[]
}) => {
  return (
    <div
      className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}
    >
      {partners_logos.map((logoProps: ILogoProps) => (
        <img src={logoProps.filename} alt={logoProps.alt} key={logoProps.id} />
      ))}
    </div>
  )
}

export default PartnersLogos
