import React from 'react'

const formatMarkdown = (
  str: string,
  { bold, italic }: { bold: string; italic: string }
) =>
  str
    .split(/(\*\*.+?\*\*)|(\*.+?\*)/)
    .filter((e: string) => e)
    .map((el: string, i: number) => {
      const template = (content: string | undefined, className: string) => (
        <span key={i} className={className}>
          {content}
        </span>
      )
      const rgxBold = /\*\*(.+)\*\*/
      const rgxItalic = /\*(.+)\*/

      if (el.match(rgxBold)) return template(el.match(rgxBold)?.[1], bold)
      if (el.match(rgxItalic)) return template(el.match(rgxItalic)?.[1], italic)
      return <span key={`default-${i}`} dangerouslySetInnerHTML={{ __html: el.replace(/\n/g, "<br />") }}></span>
    })

export default formatMarkdown
