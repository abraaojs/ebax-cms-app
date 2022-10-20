import React from 'react'
import { ReactElement } from 'react'

type ContainerProps = {
    children: ReactElement[]
}

const Container = (props: ContainerProps) => {

    return <div> {props.children} </div>
}

export default Container