import React from 'react'
import { ReactElement } from 'react'
import formatClassString from '../../../utils/format.class.string'
import ButtonFilled from '../../atomics/ButtonFilled'

type ButtonsProps = {
    blok: {
        text: string,
        show_icon: string,
    },
    link: string,
    className?: string
}[]

const details = (): string => {
    const mobile = formatClassString(`
    flex
    flex-col
    w-full
    [&>a]:min-w-[100%]
    `)
    const desktop = formatClassString(`
    md:[&>a]:min-w-[0]
    md:items-center
    `)
    const details: string = mobile + " " + desktop

    return details
}


const Buttons = ({ buttons }: { buttons: ButtonsProps }): ReactElement => {

    return (
        <div className={details()}>
            {buttons.map((button, key) => <ButtonFilled blok={button.blok} link={button.link} key={key} />)}
        </div>
    )
}

export default Buttons