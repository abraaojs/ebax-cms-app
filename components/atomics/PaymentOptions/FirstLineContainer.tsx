import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

const FirstLineContainer = (props: any) => {
  const { table, containerOpen } = props
  const columnsLeft = [...table[0].columns].splice(1, table[0].lines.length)
  return (
    <div className="md:flex w-full">
      <div className="max-w-[300px] mt-[27px] mb-[26px] md:w-[25%] md:max-w-[25%] md:flex md:items-center md:flex-wrap">
        {table[0].lines[0].payment_options.map((icon: any, index: number) => <img className="mr-[5px]" key={`${index}${index}${icon._uid}`} src={icon.filename} alt={icon.alt} />)}
      </div>
      <div className={`flex justify-between overflow-hidden transition max-h-auto md:hidden`}>
        <div className={`${containerOpen ? "h-auto" : "h-[0px]"} transition flex flex-col w-full`}>
          {columnsLeft.map((column: any, index: number) => {
            return (
              <div className="flex w-full justify-between" key={`${index}-columns${column}`}>
                <div className="mb-[24px] max-w-[100px] h-full">
                  <h6 className={`text-[12px] text-[#001F60] font-secondary ${(index === 1 || index === 0) ? "mb-[4px]" : ""}`}>{formatMarkdown(column.content, {
                    bold: 'font-200',
                    italic: 'font-italic'
                  })}</h6>

                  {(index === 1 || index === 0) ? (
                    <a
                      href={table[0].lines[0].column_1_button[0].link?.url ? table[0].lines[0].column_1_button[0].link?.url : '#'}
                      className='uppercase text-[12px]  text-[#001F60] font-secondary'
                    >
                      <span className="border-b-solid border-b-2 border-b-[#001F60] font-bold">{table[0].lines[0].column_1_button[0].text}</span>
                      <span className="font-bold ml-xs">⟶</span>
                    </a>
                  ) : ""}

                </div>
                <div className="w-[80px] flex justify-center items-center text-[#606060]">
                  <span className="text-[12px] font-400 text-center">{table[0].lines[0].column_results[index].content}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {table[0].lines[0].column_results.map((column: any) => <div key={`${column._uid}`} className="hidden md:block md:w-[18.75%] md:flex md:items-center md:justify-center"><span className="text-[14px] text-[#606060] font-400">{column.content}</span></div>)}
    </div>
  )
}
export default FirstLineContainer
