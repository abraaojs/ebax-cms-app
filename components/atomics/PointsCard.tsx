import React from 'react'
import formatMarkdown from "../../hooks/useMarkdown"

type PointsCardProps = {
  points: {
    text_point: string,
    list: { items_text: string, _uid: string }[],
  },
  widthDesktop: string,
  border: boolean,
  fontSize: string,
  bg_card: string
}

const PointsCard = (props: PointsCardProps) => {
  const { points, widthDesktop, border, fontSize, bg_card } = props
  const borderClass = border ? "border-l border-[#9BE9D6]" : ""
  const borderPadding = border ? "mx-[30px] md:mx-[30px]" : ""
  const bgFound = bg_card ? bg_card : ""


  return (
    <div className={"md:max-w-[" + widthDesktop + "] flex-col " + borderClass}>
      {border && <div className='bg-[#0051FF] w-[10px] h-[10px] rounded-full relative right-[5.519px]'></div>}
      <div className={` ${borderPadding} ${bgFound} `}>
        <h3 className={"font-secondary " + fontSize + " h-[40%]"}>{points.text_point}</h3>
        <ul className="pl-[25px] py-[16px] title-8">
          {points.list.map(listI => (
            <div className="mt-[2px]" key={listI._uid}>
              <li className=''>{formatMarkdown(listI.items_text, {
                bold: 'font-bold',
                italic: 'font-italic'
              }
              )}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PointsCard
