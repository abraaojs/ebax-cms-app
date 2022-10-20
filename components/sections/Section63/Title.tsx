import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'

const colors_bg: any = {
  'primary': 'bg-primary',
  'primary-focus': 'bg-primary-focus',
  'primary-light': 'bg-primary-light',
  'primary-extralight': 'bg-primary-extralight',
  'primary-dark': 'bg-primary-dark',
  'primary-extradark': 'bg-primary-extradark',
  'secondary': 'bg-secondary',
  'secondary-focus': 'bg-secondary-focus',
  'secondary-light': 'bg-secondary-light',
  'secondary-extralight': 'bg-secondary-extralight',
  'secondary-dark': 'bg-secondary-dark',
  'secondary-extradark': 'bg-secondary-extradark',
  'tertiary': 'bg-tertiary',
  'accent-1': 'bg-accent-1',
  'accent-2': 'bg-accent-2',
  'accent-3': 'bg-accent-3',
  'accent-4': 'bg-accent-4',
  'base': 'bg-base',
  'base-1': 'bg-base-1',
  'base-2': 'bg-base-2',
  'base-3': 'bg-base-3',
  'base-4': 'bg-base-4',
}

const colors_fill: any = {
  'primary': 'fill-primary',
  'primary-focus': 'fill-primary-focus',
  'primary-light': 'fill-primary-light',
  'primary-extralight': 'fill-primary-extralight',
  'primary-dark': 'fill-primary-dark',
  'primary-extradark': 'fill-primary-extradark',
  'secondary': 'fill-secondary',
  'secondary-focus': 'fill-secondary-focus',
  'secondary-light': 'fill-secondary-light',
  'secondary-extralight': 'fill-secondary-extralight',
  'secondary-dark': 'fill-secondary-dark',
  'secondary-extradark': 'fill-secondary-extradark',
  'tertiary': 'fill-tertiary',
  'accent-1': 'fill-accent-1',
  'accent-2': 'fill-accent-2',
  'accent-3': 'fill-accent-3',
  'accent-4': 'fill-accent-4',
  'base': 'fill-base',
  'base-1': 'fill-base-1',
  'base-2': 'fill-base-2',
  'base-3': 'fill-base-3',
  'base-4': 'fill-base-4',
}

const colors_text: any = {
  'primary': 'text-primary',
  'primary-focus': 'text-primary-focus',
  'primary-light': 'text-primary-light',
  'primary-extralight': 'text-primary-extralight',
  'primary-dark': 'text-primary-dark',
  'primary-extradark': 'text-primary-extradark',
  'secondary': 'text-secondary',
  'secondary-focus': 'text-secondary-focus',
  'secondary-light': 'text-secondary-light',
  'secondary-extralight': 'text-secondary-extralight',
  'secondary-dark': 'text-secondary-dark',
  'secondary-extradark': 'text-secondary-extradark',
  'tertiary': 'text-tertiary',
  'accent-1': 'text-accent-1',
  'accent-2': 'text-accent-2',
  'accent-3': 'text-accent-3',
  'accent-4': 'text-accent-4',
  'base': 'text-base',
  'base-1': 'text-base-1',
  'base-2': 'text-base-2',
  'base-3': 'text-base-3',
  'base-4': 'text-base-4',
}


const desktopTitleClass = `
  md:max-w-6xl
`
const mobileTitleClass = `
  title_text 
  title-2
  text-center
  max-w-lg 
`

type TitleProps = {
  text: string,
  bold_color: string,
  text_color: string,
  font_family_topol: boolean,
}

const Title = ({
  title,
}: {
  title: TitleProps
}) => {
  return (
    <h2 className={`${mergeClassString(mobileTitleClass, desktopTitleClass)}
    ${title.font_family_topol ? 'font-primary' : 'font-secondary'} ${colors_text[title.text_color]}
    `
    }>
      {formatMarkdown(title.text, {
        bold: `${colors_text[title.bold_color]} `,
        italic: 'text-secondary'
      })}
    </h2>
  )
}

export default Title
