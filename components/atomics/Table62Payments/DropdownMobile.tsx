import React from 'react'

const DropdownMobile = ({
  continents,
  setCountrySelected,
}: any) => {
  return (
    <select onChange={({ target }: any) => { setCountrySelected(JSON.parse(target.value)) }} className="md:hidden w-full bg-white border border-gray-300 rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block px-[8px] py-[4px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[16px] text-gray">
      {continents.map((continent: any) => { return continent.content.countries?.map(({ content }: any, index: any) => <option key={`${content._uid}${index}`} value={JSON.stringify(content)} className="text-black">{content.name}</option>) }
      )}
    </select>
  )
}

export default DropdownMobile
