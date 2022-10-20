import React from 'react'
import { ReactElement } from 'react'
import formatClassString from '../../../utils/format.class.string'
import TextCardFlex from '../../atomics/TextCardFlex'

type CardsProps = {
    support_text?: string,
    title_text: string,
    button_area:
    {
        link: {
            url: string,
        },
        text: string,
    }[]
    ,
    content_text: string,
    theme?: string,
    tag_area: any,
    text_color: string,
    background_color: string,
}

const details = (): string => {
    const mobile = formatClassString(`
    flex
    flex-col
    gap-y-6
    [&>div]:min-h-[282px]
    mt-lg
    mb-[32px]
    `)
    const desktop = formatClassString(`
    md:flex-row
    md:w-[100%]
    md:gap-x-6
    [&>div]:md:basis-[11%]
    [&>div]:md:grow
    [&>div]:md:shrink	    
    [&>div]:md:min-h-[238px]
    md:mt-[48px]
    
    `)
    const details: string = mobile + " " + desktop

    return details
}



const Cards = ({ cards, max_card_col }: { cards: CardsProps[], max_card_col: number }): ReactElement => {
    return (
        <div className={`${details()}   ${max_card_col ? `md:grid-cols-${max_card_col}` : `md:grid-cols-6`} `}>
            {cards.map((card, key) => <TextCardFlex blok={card} contentTextClass="" className='!rounded-[18px]' key={key} />)}
        </div>
    )
}

export default Cards