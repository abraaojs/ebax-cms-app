import React from 'react'
import useScript from '../../../hooks/useScript'
import formatClassString from '../../../utils/format.class.string'
import { ButtonFilledProps } from '../../atomics/ButtonFilled'
import { TypeEventCardProps } from '../../atomics/EventCard2'
import ButtonArea from './ButtonArea'
import Container from './Container'
import Form, { FormProps } from './Form'
import Subtitle from './Subtitle'
import Support from './Support'
import Title from './Title'

type Image = {
  filename: string
}

type Section41 = {
  zIndex: number,
  title_text: string,
  subtitle_text: string,
  support_text: string,
  tag: string,
  image: Image,
  event_area: TypeEventCardProps[],
  background: string,
  button_area: ButtonFilledProps[],
  form_area: FormProps[]
}

const mobileSectionClass = `
  section_41
  text-content-light 
  -mb-sct 
  pt-sct 
  relative 
  rounded-b-sct
  bg-base-1
`

const Section41 = ({ blok }: { blok: Section41 }) => {
  useScript('/js/hubspot.js')
  return (
    <section
      className={formatClassString(mobileSectionClass)}
      style={{ zIndex: -blok.zIndex }}
    >
      <Container>
        <div className="flex flex-col justify-center items-center gap-xl">
          <Title title={blok.title_text} />
          <Subtitle subtitle={blok.subtitle_text} />
          <Support support={blok.support_text} />
        </div>
        <Form form_area={blok.form_area[0]} />
      </Container>
    </section>
  )
}

export default Section41