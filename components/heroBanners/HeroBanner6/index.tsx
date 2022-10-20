import React from "react"
import { ReactElement } from "react"
import formatClassString from "../../../utils/format.class.string"
import ButtonFilled from "../../atomics/ButtonFilled"
import Breadcrumb from "./Breadcrumb"
import Buttons from "./Button"
import Cards from "./Cards"
import Container from "./Container"
import Image from "./Image"
import { colors_bg, colors_text } from "../../../utils/colors.object"
import Subtitle from "./Subtitle"
import Title from "./Title"

type HeroBanner6Props = {
    breadcrumb: {
        text: string,
        url: string
    },
    title: string,
    subtitle: string,
    image: {
        url: string,
        alt: string
    },
    cards: object[],
    button: any,
    text_color: string
    background_color: string
    title_font_topol: boolean
    max_card_col: number
}

const getButtons = (buttons: any[]) => {
    return buttons.map((button, key) => {
        return {
            blok: {
                text: button.text,
                show_icon: button.show_icon,
            },
            link: button.link.url,
        }
    }).reverse()
}

/**
 * Render the hero-banner-6 component.
 * @see {@link https://www.figma.com/file/1kVGH77Cj6xgtOi3HcIq05/EBANX-%7C-Foundation?node-id=1569%3A6579} for the Figma reference.
 * @see {@linkcode https://github.com/GaugeBrasil/ebax-cms/blob/main/theme.config.ts} for the theme configuration reference.
 * @return {ReactElement}      The HeroBanner6 element
 */
const HeroBanner6 = (blok: any | HeroBanner6Props) => {
    const { title_text, subtitle_text, image, cards, text_color, background_color, title_font_topol, max_card_col } = blok.blok
    const breadcrumb = blok.blok.breadcrumb[0]
    const buttons = getButtons(blok.blok.button)

    const content = formatClassString(`
    flex
    flex-col
    gap-y-6
    md:max-w-[547px]
    `)

    return (
        <section className={`flex justify-center ${colors_bg[background_color] ? colors_bg[background_color] : ""} -mb-sct relative rounded-b-sct ${colors_text[text_color]}`}>
            <Container >
                <div className="flex flex-col gap-y-6 w-full md:flex-row md:gap-x-6">
                    <div className={content}>
                        <Breadcrumb text={breadcrumb.text} url={breadcrumb.link.url} text_color={text_color} />
                        <Title title={title_text} text_color={text_color} title_font_topol={title_font_topol} />
                        <Subtitle text={subtitle_text} />
                    </div>
                    <Image url={image.filename} alt={image.alt} />
                </div>
                <Cards max_card_col={max_card_col} cards={cards} />
                <Buttons buttons={buttons} />
            </Container>

        </section>
    )
}

export default HeroBanner6