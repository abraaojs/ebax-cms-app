import React from 'react'
import ButtonClear from "../ButtonClear"

const TableHeaderDesktop = ({
  countrySelected,
}: any) => {
  return (
    <div className="hidden md:flex justify-between items-center">
      <div className="w-full md:flex hidden items-center justify-between h-[40px]">
        <div className="flex mr-[16px]">
          <img className="w-[43px] mr-[16px]" src={`/flags/${countrySelected.flag}.svg`} alt={countrySelected.flag} />
          <h3 className="font-secondary text-[24px] font-700">{countrySelected.name}</h3>
        </div>
        {countrySelected?.button?.[0] && (
          <ButtonClear blok={countrySelected?.button[0]} link="" className="text-[14px] " />
        )}
      </div>
    </div>
  )
}

export default TableHeaderDesktop
