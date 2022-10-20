import React, { useState } from "react"
import ButtonClear from "../ButtonClear"
import FirstLineContainer from "./FirstLineContainer";

const FirstLine = (props: any) => {
  const [containerOpen, setContainer] = useState(false);
  const { table } = props
  return (
    <>
      <div className="bg-white pt-[16px] py-[20px] px-[16px] rounded-b-[10px]">
        <div className="flex justify-between ">
          <span className="paragraph-3 font-700">{table[0].lines[0].title}</span>
          <button type="button" className="border-none md:hidden bg-white" onClick={() => setContainer(!containerOpen)}>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${containerOpen ? "" : "rotate-180"} transition duration-300`} onClick={() => setContainer(!containerOpen)}>
              <path d="M0.337943 6.57574C0.103628 6.81005 0.103628 7.18995 0.337943 7.42426C0.572258 7.65858 0.952157 7.65858 1.18647 7.42426L0.337943 6.57574ZM6.76221 1L7.18647 0.575736C6.95216 0.341421 6.57226 0.341421 6.33794 0.575736L6.76221 1ZM12.3379 7.42426C12.5723 7.65858 12.9522 7.65858 13.1865 7.42426C13.4208 7.18995 13.4208 6.81005 13.1865 6.57574L12.3379 7.42426ZM1.18647 7.42426L7.18647 1.42426L6.33794 0.575736L0.337943 6.57574L1.18647 7.42426ZM6.33794 1.42426L12.3379 7.42426L13.1865 6.57574L7.18647 0.575736L6.33794 1.42426Z" fill="#0051FF" />
            </svg>
          </button>
        </div>
        <FirstLineContainer table={table} containerOpen={containerOpen} />
        <ButtonClear blok={table[0].lines[0].button[0]} uppercase={true} className="paragraph-3" link="" />
      </div>
    </>
  )
}
export default FirstLine

