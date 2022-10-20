import React from 'react'
import { ReactElement } from 'react'
import formatClassString from '../../../utils/format.class.string'

type ImageProps = {
    url: string
    alt?: string
}

const details = (): string => {
    const mobile = formatClassString(`
    [&>*]:w-[100%]
    rounded-[16px]
    [&>*]:rounded-[16px]
    `)
    const desktop = formatClassString(`
    md:flex
    md:justify-center 
    md:items=center
    md:m-l-auto
    [&>*]:md:min-w-[fit-content]
    [&>*]:md:max-w-[100%] 
    md:overflow-hidden	
    `)
    const details: string = mobile + " " + desktop

    return details
}


const Image = (props: ImageProps): ReactElement => {

    return (
        <div
            className={details()}
        // role="img"
        // aria-label={props.alt}
        // style={{ backgroundImage: `url(${props.url})` }}
        >
            <img className='' src={props.url} alt={props.alt} />
        </div>
    )
}

export default Image
