import React from 'react'
import ButtonArea from './ButtonArea'
import Container from './Container'
import Title from './Title'

type typeSection69 = {
  zIndex: number
  title_text: string
  button_area: any
}

const Section69 = ({ blok }: { blok: typeSection69 }) => {
  return (
    <Container
      zIndex={blok.zIndex}
    >
      <Title title_text={blok.title_text} />
      <ButtonArea button_area={blok.button_area} />
    </Container>
  )
}
export default Section69
