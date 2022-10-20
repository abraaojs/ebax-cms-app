import React from 'react'
import useScript from '../../../hooks/useScript'
import formatClassString from '../../../utils/format.class.string'
import { ButtonFilledProps } from '../../atomics/ButtonFilled'
import { TypeEventCardProps } from '../../atomics/EventCard2'
import ButtonArea from './ButtonArea'
import Container from './Container'
import Form, { FormProps } from './Form'
import Title from './Title'

type Image = {
  filename: string
}

type Section20 = {
  zIndex: number,
  title_text: string,
  subtitle_text: string,
  tag: string,
  image: Image,
  event_area: TypeEventCardProps[],
  background: string,
  button_area: ButtonFilledProps[],
  form_area: FormProps[]
}

const mobileSectionClass = `
  section_19 
  text-content-light 
  -mb-sct 
  pt-sct 
  relative 
  rounded-b-sct
  bg-[#e9ebff]
`

const Section21 = ({ blok }: { blok: Section20 }) => {
  useScript('/js/hubspot.js')
  return (
    <section
      className={formatClassString(mobileSectionClass)}
      style={{ zIndex: -blok.zIndex }}
    >
      <Container>
        <Title title={blok.title_text} />
        <Form form_area={blok.form_area[0]} />
      </Container>
    </section>
  )
}

export default Section21