import React from 'react'
import { ReactElement } from 'react'
import { colors_text } from '../../../utils/colors.object'
import formatClassString from '../../../utils/format.class.string'

const details = (): string => {
    const mobile = formatClassString(`
    title-1
    `)
    const desktop = formatClassString(`
    
    `)
    const details: string = mobile + " " + desktop

    return details
}


const Title = ({ title, text_color, title_font_topol }: { title: string, text_color: string, title_font_topol: boolean }): ReactElement => {

    return <h1 className={`${details()} ${colors_text[text_color]} ${title_font_topol ? "font-primary" : "font-secondary"}`}> {title} </h1>
}

export default Title