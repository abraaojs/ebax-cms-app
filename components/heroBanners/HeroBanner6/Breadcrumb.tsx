import React from 'react'
import { ReactElement } from 'react'
import formatClassString from '../../../utils/format.class.string'
import { colors_text, colors_fill } from "../../../utils/colors.object"

type BreadcrumbProps = {
    text: string,
    url: string,
    text_color: string
}

const details = (): string => {
    const mobile = formatClassString(`
    flex
    items-center
    decoration-none
    paragraph-7
    
    [&>p]:font-secondary
    [&>p]:relative
    [&>p]:left-sm
    `)
    const desktop = formatClassString(`
    
    `)
    const details: string = mobile + " " + desktop

    return details
}

const Breadcrumb = (props: BreadcrumbProps): ReactElement => {

    return (
        <a href={props.url} className={`${details()} ${colors_text[props.text_color]}`}>
            <svg width="15" height="15" viewBox="0 0 17 17" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <rect className={`${colors_fill[props.text_color]}`} x="0.109375" y="0.309692" width="16" height="16" rx="8" fill="transparent" />
                <path d="M10.3062 5.59525C10.5525 5.37974 10.5775 5.00538 10.362 4.75908C10.1465 4.51279 9.7721 4.48783 9.52581 4.70334L10.3062 5.59525ZM6.30416 8.30966L5.91395 7.86371C5.78536 7.97623 5.71159 8.13879 5.71159 8.30966C5.71159 8.48054 5.78536 8.6431 5.91395 8.75562L6.30416 8.30966ZM9.52581 11.916C9.7721 12.1315 10.1465 12.1065 10.362 11.8602C10.5775 11.614 10.5525 11.2396 10.3062 11.0241L9.52581 11.916ZM9.52581 4.70334L5.91395 7.86371L6.69437 8.75562L10.3062 5.59525L9.52581 4.70334ZM5.91395 8.75562L9.52581 11.916L10.3062 11.0241L6.69437 7.86371L5.91395 8.75562Z" fill="#001F60" />
            </svg>
            <p>{props.text}</p>
        </a>
    )
}

export default Breadcrumb