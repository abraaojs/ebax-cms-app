import React from "react"

type PartnersLogosProps = {
  partners_logos: object[],
}

const PartnersLogos = (props: PartnersLogosProps) => {
  const { partners_logos } = props
  return (
    <div className="partner_logos flex gap-lg justify-center max-w-full overflow-y-hidden md:px-[0px]">
      <div className="partner_logos flex gap-lg overflow-x-scroll relative top-[10px] scroll-smooth snap-x items-center py-[4px]">
        {partners_logos.map((logoProps: any, index: number) => (
          <img
            className={`${logoProps.alt === "shien_logo" ? "h-[16px] relative top-[2px]" : ""} mt-md ${index === 0 ? "pl-lg" : ""} snap-start ${logoProps.alt === "uber_logo" ? "h-[18px] relative top-[3px]" : ""}`}
            src={logoProps.filename}
            alt={logoProps.alt}
            key={logoProps.id}
          />
        ))}
      </div>
    </div>
  )
}

export default PartnersLogos
