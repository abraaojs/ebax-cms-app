import React from "react"

const BottomDetail = (props: any) => {
  const { color } = props;
  return (
    <div className="notch relative w-full flex justify-between b-none top-[31px] md:top-[95px]">
      <div className="w-radius-primary aspect-square"></div>
      <svg
        viewBox="0 0 167 30"
        className="fill-white h-full max-h-[32px] aspect-[167/30]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M57.26.8c32.27-.02 72-.04 101.3-.04C149.8 2.63 136 7.4 121.1 17.1c-12.46 8.14-23.93 11.92-35.12 11.79-11.18-.14-22.12-4.18-33.53-11.78-11.3-7.54-20.5-11.87-28.65-14.3a68.46 68.46 0 0 0-8.66-2L57.26.79Z" />
      </svg>
      <div className="w-radius-primary aspect-square"></div>
    </div>
  )
}

export default BottomDetail
