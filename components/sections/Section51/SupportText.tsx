import React from "react"

type SupportTextProps = {
  partners_title: string,
}

const SupportText = (props: SupportTextProps) => {
  const { partners_title } = props
  return (
    <h3 className="partners_title text-smd font-secondary font-bold text-white text-center mt-2xl px-lg md:px-[0px]">
      {partners_title}
    </h3>
  )
}

export default SupportText
