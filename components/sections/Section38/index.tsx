import React from 'react'
import Container from './Container'
import CardList from '../../atomics/CardList'
import { ButtonClearProps } from '../../atomics/ButtonClear'
import ButtonArea from './ButtonArea'
import TextContent from './TextContent'

type typeSection38 = {
    zIndex: number
    button_area: ButtonClearProps[],
    text_content: string
}

const Section38 = ({ blok }: { blok: typeSection38 }) => (
    <Container zIndex={blok.zIndex}>
        <ButtonArea button_area={blok.button_area} />
        <TextContent text_content={blok.text_content} />
    </Container>
)

export default Section38
