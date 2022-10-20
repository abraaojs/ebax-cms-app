import React from "react"

const BottomDetail = () => {
  return (
    <div className="notch relative w-full flex justify-center b-none top-[-2px] md:top-[-2px]" style={{
      zIndex: 10,
    }}>
      <img src="/general_icons/bottom-detail.svg" alt="drop" className="fill-[#001F60] h-full max-h-[32px] aspect-[167/30]" />
    </div>
  )
}

export default BottomDetail
