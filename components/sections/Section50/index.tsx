import React from 'react'
import { getValue } from '../../../hooks/utils'
import ButtonArea from './ButtonArea'
import Container from './Container'
import Title from './Title'

type typeSection47 = {
  zIndex: number
  title_text: string
  button_area: any
  background_color: any
  title_font_topol: boolean
  bold_color: string
  title_color: string
}

const Section50 = ({ blok }: { blok: any }) => {
  const backgroundColor = getValue(blok, 'background_color')
  const sectionBackground = {
    light: 'bg-base',
    medium: 'bg-base-1',
    dark: 'bg-base-2'
  }

  return (
    <Container
      zIndex={blok.zIndex}
      backgroundColor={`${backgroundColor(sectionBackground)}`}
    >
      <Title text_color={blok.title_color} title_text={blok.title_text} title_font_topol={blok.title_font_topol} bold_color={blok.bold_color} />
      <ButtonArea button_area={blok.button_area} />
    </Container>
  )
}
export default Section50
