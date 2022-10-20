import React from 'react'
import Container from './Container'
import CardList from '../../atomics/CardList'
import Title from './Title'
import ButtonArea from './ButtonArea'
import { ButtonFilledProps } from '../../atomics/ButtonFilled'
import ImageBackground from './ImageBackground'
import Subtitle1 from './Subtitle1'
import Subtitle2 from './Subtitle2'

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

type typeSection65 = {
  background_color: string
  table_background_color: string
  text_color: string
  zIndex: number
  title_text: string
  text_group: object[] | any,
  table_area: any
  button_area: ButtonFilledProps[],
  image: {
    filename: string,
  },
  image_position: string,
  subtitle_1: string,
  subtitle_2: string,
}

const Section65 = ({ blok }: { blok: typeSection65 }) => (
  <Container zIndex={blok.zIndex} background_color={blok.background_color} text_color={blok.text_color}>
    <Title title_text={blok.title_text} />
    <ImageBackground backgroundImage={blok.image.filename} backgroundPosition={blok.image_position} />
    <Subtitle1 subtitle1_text={blok.subtitle_1} />
    <Subtitle2 subtitle2_text={blok.subtitle_2} />

    <div className={`md:w-[50%] self-center ${colors_bg[blok.table_background_color]} p-xl rounded-sct`}>
      <CardList bg_card={`${colors_bg[blok.table_background_color] ? colors_bg[blok.table_background_color] : 'bg-base'}`} fontSize="text-[20px] md:text-[24px]" hasBorder={true} widthDesktop="100%" text_group={blok.text_group} />
    </div>
    <ButtonArea button_area={blok.button_area} />

  </Container>
)

export default Section65
