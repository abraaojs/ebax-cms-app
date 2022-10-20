import React from 'react'
import { TypeEventCard } from '../../atomics/EventCard1'
import CardArea from './CardArea'
import Container from './Container'
import ContainerMax from '../../atomics/Container'
import Image from './Image'
import Subtitle from './Subtitle'
import Tag from './Tag'
import Title from './Title'

type Image = {
    filename: string
}

type Section19 = {
    zIndex: number,
    title_text: string,
    subtitle_text: string,
    tag: string,
    image: Image,
    card_area: TypeEventCard[]
}

const Section19 = ({ blok }: { blok: Section19 }) => {
    return (
        <Container zIndex={blok.zIndex}>
            <ContainerMax paddingX='md:px-5xl'>
                <div className="flex flex-col items-center gap-lg md:gap-mb">
                    <Tag tag={blok.tag} />
                    <Title title={blok.title_text} />
                    <Subtitle subtitle={blok.subtitle_text} />
                </div>
                <div className="flex flex-col md:flex-row md:flex-row-reverse">
                    <Image image={blok.image} />
                    <CardArea card_area={blok.card_area} />
                </div>
            </ContainerMax>
            <></>
        </Container>
    )
}

export default Section19