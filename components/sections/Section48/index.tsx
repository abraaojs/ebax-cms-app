import React from 'react'
import Container from './Container'
import Title from './Title'
import TableArea from './TableArea'

type typeSection48 = {
  zIndex: number
  title_text: string
  table_area: any
  background_color: string
  bold_color: string
  text_color: string
  title_font_topol: boolean
  table_background: string
}

const Section48 = ({ blok }: { blok: typeSection48 }) => {
  return (
    <Container zIndex={blok.zIndex} background_color={blok.background_color} text_color={blok.text_color}>
      <Title title_font_topol={blok.title_font_topol} title_text={blok.title_text} bold_color={blok.bold_color} />
      <TableArea table_background={blok.table_background} table_area={blok.table_area} />
    </Container>
  )
}

export default Section48
