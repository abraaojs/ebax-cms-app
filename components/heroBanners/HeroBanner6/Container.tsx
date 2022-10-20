import React from 'react'
import { ReactElement } from 'react'
import formatClassString from '../../../utils/format.class.string'

type ContainerProps = {
    children: ReactElement[]
}

const details = (): string => {
    const mobile: string = formatClassString(`
    py-5xl
    px-lg
    content-dark
    flex
    flex-col
    rounded-b-lg
    basis-[1000%]
    `)
    const desktop: string = formatClassString(`
    md:px-5x2
    md:py-9xl
    md:flex-row
    md:flex-wrap
    max-w-[1366px]
    `)
    const details: string = mobile + " " + desktop

    return details
}

const Container = (props: ContainerProps) => {

    return <div className={details()}> {props.children} </div>
}

export default Container