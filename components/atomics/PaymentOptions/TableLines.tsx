import React from "react"
import Line from "./Line"

const TableLines = (props: any) => {
  const { linesLeft, columnsLeft } = props
  return (
    <>
      {linesLeft.map((line: any) => (
        <Line key={line._uid} columnsLeft={columnsLeft} line={line} />
      ))}
    </>
  )
}
export default TableLines