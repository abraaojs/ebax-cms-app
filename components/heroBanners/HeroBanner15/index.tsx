import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import BottomDetail from './BottomDetail'
import Container from "../../atomics/Container"

type HeroBanner15 = {
    title_text: string,
    subtitle_text: string,
    support_text?: string
}

const HeroBanner15 = ({ blok }: { blok: any }) => {
    const { support_text, title, subtitle_text, image_1, image_2, button } = blok
    return (
        <section className='bg-white pt-7xl md:pt-9xl -mb-sct relative rounded-b-sct md:rounded-b-[0px] md:pb-5xl'>
            <Container paddingX='px-lg md:px-5x2 '>

                <span className='text-[20px] md:text-lg font-700 text-base-3 lg:block lg:mb-[20px]'> {support_text} </span>

                <div className='lg:align-top'>

                    <div className='lg:flex lg:flex-row lg:justify-items-start lg:content-between'>
                        <div className='lg:pr-[104px]'>
                            <h2 className='title-2 font-700 text-base-3 my-lg uppercase lg:max-w-[800px] lg:pr-[0] lg:mt-[0]'>  {formatMarkdown(title, {
                                bold: 'text-primary',
                                italic: 'text-secondary'
                            })}
                            </h2>
                            {subtitle_text.map((textt: any) => (
                                <p className='mb-lg text-[14px] font-400 lg:leading-[22px]' key={textt._uid}>{textt.content}</p>
                            ))}
                        </div>

                        <div className='flex justify-center'>
                            <img className='max-w-[215px] max-h-[284px] object-cover object-left rounded-md mr-[14px] lg:max-w[449px] lg:max-h-[356px]' src={image_1.filename} alt={image_1.alt} />
                            <img className='max-w-[96px] h-[284px] object-cover rounded-md lg:max-w[162px] lg:h-[356px]' src={image_2.filename} alt={image_2.alt} />
                        </div>
                    </div>

                    <div className='mt-xl bg-primary w-full rounded-btn py-md px-xl hover:bg-primary-focus cursor-pointer 
                            uppercase md:w-auto text-center text-content-dark max-w-md font-bold lg:px-[0]'>
                        <a
                            className={`h-full w-full text-white`}
                            href={button[0].link?.url ? button[0].link?.url : '#'}
                        >
                            {button[0].text} {button[0].show_icon ? '⟶' : ''}
                        </a>
                    </div>

                </div>
                <BottomDetail color="white" />
            </Container>
        </section>
    )
}

export default HeroBanner15
