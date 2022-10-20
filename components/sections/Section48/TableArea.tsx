import React from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import TableFlex from '../../atomics/TableFlex'

const desktopDivClass = `
`
const mobileDivClass = `
  md:w-250
  self-center
`


const TableArea = ({
    table_area,
    table_background,
}: {
    table_area: any
    table_background: string
}) => {

    return (
        <div className={mergeClassString(mobileDivClass, desktopDivClass)}>
            <TableFlex tableContent={table_area} table_background={table_background} />
        </div>
    )
}

export default TableArea
