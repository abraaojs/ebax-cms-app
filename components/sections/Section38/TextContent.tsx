import React from "react"
import formatMarkdown from "../../../hooks/useMarkdown"

type TextContentProps = {
    text_content: string,
}

const TextContent = (props: TextContentProps) => {
    const { text_content } = props
    return (
        <p className="paragraph-2 text-center md:text-left">{
            formatMarkdown(text_content, {
                bold: 'text-primary',
                italic: 'text-primary'
            }
            )
        }
        </p>
    )
}

export default TextContent


