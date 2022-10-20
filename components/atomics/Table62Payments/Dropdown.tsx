import React from 'react'

const Dropdown = ({
  continents,
  setCountrySelected,
}: any) => {
  const randomNumber = () => Math.floor(Math.random() * 10)
  return (
    <div className="hidden md:block md:flex md:flex-col md:max-w-[29%] bg-white px-lg py-[32px] rounded-[10px] bg-white w-full mt-[40px] rounded-[10px]">
      {continents.map((continent: any, index: number) => (
        <>
          <span key={`${continent._uid}${index}${randomNumber()}${randomNumber()}`} className="font-700 block mb-[24px] text-[18px]">{continent?.content?.shot_name}</span>
          {continent?.content?.countries && continent?.content?.countries?.map(({ content }: any) => <>
            <span
              key={`${content._uid}${index}${randomNumber()}${randomNumber()}`}
              className="text-black block mx-[16px] mb-[24px] cursor-pointer text-[16px]"
              onClick={() => setCountrySelected(content)}
            >
              {content.name}
            </span>
          </>)}
        </>
      ))}
    </div>
  )
}

export default Dropdown
