import React from 'react'

const TableButton = ({
  actualCountry,
}: any) => {
  return (
    <div className={`mt-[26px] bg-primary hover:bg-primary-focus cursor-pointer uppercase
          rounded-btn w-full md:w-auto text-center text-content-dark max-w-md font-bold w-full h-full py-[16px] px-[12px] md:hidden`}>
      <a
        className={`bg-primary hover:bg-primary-focus cursor-pointer uppercase
          rounded-btn w-full md:w-auto text-center text-content-dark max-w-md font-bold w-full h-full`}
        href={actualCountry.button[0].link?.url ? actualCountry.button[0].link?.url : '#'}
      >
        {actualCountry.button[0].text} {actualCountry.button[0].show_icon ? '⟶' : ''}
      </a>
    </div>
  )
}

export default TableButton
