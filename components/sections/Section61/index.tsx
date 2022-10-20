import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import Container from "../../atomics/Container"

type Section61Props = {
    title: string,
    text: string,
    card_allign_center: {
        _uid: string,
        icon: string,
        title: string,
        text: string,
    }[],
    _uid: string,
    zIndex: number
}

const Section61 = ({ blok }: { blok: Section61Props }) => {
    const { title, text, card_allign_center } = blok
    return (
        <section key={blok._uid} className='bg-white py-[64px] flex flex-col items-center justify-center md:py-9xl -mb-sct relative rounded-b-sct'
            style={{
                zIndex: -blok.zIndex,
            }}>
            <Container paddingX='px-[24px] md:px-5x2'>

                <h2 className='title-2 font-700 text-base-3 my-lg uppercase text-center md:max-w-[900px] md:mx-auto'>  {formatMarkdown(title, {
                    bold: 'text-primary',
                    italic: 'text-secondary'
                })}
                </h2>

                <p className='text-tertiary  mb-lg text-[14px] font-400 lg:leading-[22px]  text-center md:text-[16px] md:max-w-[700px] md:mx-auto'> {text} </p>

                <div className='lg:flex lg:flex-wrap lg:content-between lg:justify-center max-w-[1300px] md:mt-[32px]'>
                    {card_allign_center.map((card: { icon: string, title: string, text: string }, index: number) => (

                        <div className={`flex flex-col items-center justify-center w-[327px] h-[279px] bg-base-1 rounded-[16px] lg:w-[350px] lg:h-[290px] lg:justify-center lg:content-center lg:py-[32px] 
                    ${index !== card_allign_center.length - 1 ? 'mb-[16px]' : ''} ${index !== card_allign_center.length - 2 && index !== card_allign_center.length - 5 ? '' : 'lg:mx-[16px]'} `}>
                            <img className='text-tertiary w-[49px] mb-[24px] lg:w-[49px]' src={`/icons/${card.icon}.svg`} alt={card.icon} />
                            <h4 className='text-tertiary text-[20px]  font-secundary font-700 mb-[8px] md:text-[24px]'>{card.title}</h4>
                            <p className='text-tertiary max-w-[250px] text-[14px]  text-center font-secundary font-400 md:text-[16px] lg-max-w[295px]'>
                                {formatMarkdown(card.text, {
                                    bold: 'font-700',
                                    italic: 'text-secondary'
                                })}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section >
    )
}

export default Section61