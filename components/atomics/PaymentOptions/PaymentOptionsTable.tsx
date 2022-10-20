import React from "react"
import TableLines from "./TableLines"
import ColumnHeader from "./ColumnHeader"
import FirstLine from "./FirstLine"

const PaymentOptionsTable = (props: any) => {
  const { table } = props
  const linesLeft = [...table[0].lines].splice(1, table[0].lines.length)
  const columnsLeft = [...table[0].columns].splice(1, table[0].lines.length)
  return (
    <>
      <ColumnHeader table={table} />
      <FirstLine table={table} />
      <TableLines linesLeft={linesLeft} columnsLeft={columnsLeft} />
    </>
  )
}
export default PaymentOptionsTable

