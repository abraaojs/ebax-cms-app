import React from "react"
import formatMarkdown from '../../../hooks/useMarkdown'

const PaymentOptionsTable = (props: any) => {
  const { table } = props
  const columnsLeft = [...table[0].columns].splice(1, table[0].lines.length)
  return (
    <div className="paragraph-1 py-[20px] px-[16px] font-700 text-white bg-[#0048F3] rounded-t-[10px] md:flex justify-center items-center">
      <div className="md:w-[25%]" key={`teste-12 `}>
        {table[0].columns[0].content}
      </div>
      {columnsLeft.map((column: any, index: number) => (
        <div key={column._uid} className="hidden md:block w-[18.75%] text-center md:flex md:flex-col md:justify-center md:items-center">
          <span className="max-w-[300px] text-[16px]">{
            formatMarkdown(column.content, {
              bold: 'font-100',
              italic: 'font-italic'
            })}
          </span>
          {(index === 1 || index === 0) ? (
            <a
              href={table[0].lines[0].column_1_button[0].link?.url ? table[0].lines[0].column_1_button[0].link?.url : '#'}
              className='uppercase text-[12px] text-white font-secondary mt-[4px]'
            >
              <span className="border-b-solid border-b-2 border-b-white font-bold">{table[0].lines[0].column_1_button[0].text}</span>
              <span className="font-bold ml-xs">⟶</span>
            </a>
          ) : ""}
        </div>))}
    </div>
  )
}
export default PaymentOptionsTable

