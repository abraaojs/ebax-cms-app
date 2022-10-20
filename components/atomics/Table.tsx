import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'

const Table = ({
    tableContent,
    className
}: {
    tableContent: any[]
    className?: string
}) => {
    const base = `bg-base rounded-[16px] px-lg`
    return (
        <div className={`${base} ${className ? className : ''}`}>

            <table>
                <tbody className='divide-y divide-slate-500/10 w-full'>
                    {tableContent.map(item => {
                        return (
                            <tr key={item._uid} className='grid grid-cols-3 py-6 gap-y-4 leading-relaxed'>
                                <td className='col-span-3 md:col-span-1'>{formatMarkdown(item.first_col, {
                                    bold: 'font-bold',
                                    italic: 'font-italic'
                                })}</td>
                                <td className='col-span-3 md:col-span-2'>{formatMarkdown(item.second_col, {
                                    bold: 'font-bold',
                                    italic: 'font-italic'
                                })}</td>
                            </tr>

                        );
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Table
