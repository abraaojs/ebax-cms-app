import React from 'react'
import { ReactElement } from 'react'
import formatClassString from '../../../utils/format.class.string'

type SubtitleProps = {
    text: string
}

const details = (): string => {
    const mobile = formatClassString(`
    font-secondary
    title-7
    max-w-[430px]
    `)
    const desktop = formatClassString(`
    
    `)
    const details: string = mobile + " " + desktop

    return details
}


const Subtitle = (props: SubtitleProps): ReactElement => {

    return <h2 className={details()}> {props.text} </h2>
}

export default Subtitle