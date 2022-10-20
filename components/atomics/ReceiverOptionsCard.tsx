import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'

type ReceiverOptionsCardProps = {
  options_card: any
}

const ReceiverOptionsCard = (props: any) => {
  const { options_card } = props
  return (
    <div className="text-[14px] mb-[48px] md:mb-auto">
      <div className='bg-[#0051FF] text-white flex justify-between px-[40px] py-[24px] rounded-t-[10px] md:w-[360px] lg:w-[580px] md:py-[32px]'>
        <span className='font-600'>{options_card.column_1}</span>
        <span className='font-600'>{options_card.column_2}</span>
      </div>
      {options_card.lines.map((line: any, index: any) => (
        <div
          key={line._uid}
          className={`bg-white flex justify-between pr-[28px] pl-[40px] py-[24px] mb-[10px] md:mb-[0px]  md:w-[360px] lg:w-[580px] ${index === 0 ? (
            "rounded-b-[10px] md:rounded-b-none"
          ) : (
            "rounded-[10px] md:rounded-none"
          )} ${index === options_card.lines.length - 1 ? ' md:rounded-b-[10px] ' : ''}`}
        >
          <div className="flex justify-between flex-col items-start md:flex-row md:w-[70%]">
            {line.line_text_1.split('     ').legth >= 1 ? <span className=''>{line.line_text_1}</span> : line.line_text_1
              .split('     ')
              .map((textpart: any, index: any) => <span key={`textpart_${index}`} className='mb-[10px] md:mb-[0px]'>{formatMarkdown(textpart, {
                bold: 'font-bold',
                italic: 'font-italic'
              })}</span>)}
            <div className={`flex ${line.payment_options.length > 0 ? "min-w-[190px]" : ""}`} >
              {line.payment_options.map((item: any, index: number) => <img key={`${item._uid} ${index}`} src={item.filename} className='max-w-[50px] mr-[5px] ' />)}
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-[#7C7C7C] '>
            {line.line_text_2.split('     ').map((item: string, index: any) => <span key={`text_span_${index}`}>{formatMarkdown(item, {
              bold: 'font-bold',
              italic: 'font-italic'
            })}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReceiverOptionsCard
