import { url } from "inspector"
import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"
import { colors_bg, colors_text } from "../../../utils/colors.object"
import ButtonFilled from "../../atomics/ButtonFilled"

const Section24 = ({ blok }: any) => {
    const title = blok.title_text
    const image = blok.image.filename
    const texts = blok.texts
    const max_card_col = blok.max_card_col
    const button = blok.button[0]

    return (
        <section className={`${colors_bg[blok.background_color]} -mb-[80px] pt-sct relative rounded-b-sct py-5xl ${colors_text[blok.text_color]}`}
            style={{ zIndex: -blok.zIndex }}
        >
            <div className="max-w-[1366px] mx-auto px-lg lg:px-5x2 lg:py-9xl">

                <div className="lg:flex h-full w-full pt-[64px]">
                    <div className="lg:w-[46%]">
                        <h2 className={`text-[34px] lg:text-[55px] uppercase max-w-[550px] mb-xl ${blok.title_font_topol ? 'font-primary' : 'font-secondary'}`}>{
                            formatMarkdown(title, {
                                bold: `${colors_text[blok.bold_color]}`,
                                italic: 'text-secondary'
                            }
                            )
                        }
                        </h2>
                    </div>
                    <div className={`h-[187px] lg:w-[53%] bg-cover lg:bg-center lg:bg-bottom lg:h-auto background-man-image lg:max-w-[100%] lg:ml-[32px] rounded-sm`} style={{
                        backgroundImage: `url(${image})`,
                        backgroundPositionY: '300px',
                        backgroundPositionX: "0px"
                    }}>
                    </div>
                </div>
                <div className={` mt-xl  w-full ${max_card_col ? `md:grid-cols-${max_card_col}` : `md:grid-cols-6`}  `}>
                    {texts.map((text: any, index: any) => {
                        return (
                            <div className="  mr-[32px]" key={`24_${index}`}>
                                <p className={`title-8 lg:mb-[0px] ${index === text.length - 1 ? "" : "mb-[32px]"}`}>{formatMarkdown(text.content, {
                                    bold: 'font-bold',
                                    italic: 'font-italic'
                                }
                                )}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full button lg:mt-[24px] mt-[0px] [&>div]:md:mx-auto flex justify-center md:mt-[0px]">
                    <ButtonFilled blok={button} />
                </div>
            </div>
        </section>
    )
}

export default Section24