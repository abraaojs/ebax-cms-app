import React from 'react'
import Subtitle from './Subtitle'
import Form from './Form'
import EbanxLogo from './EbanxLogo'
import Title from './Title'
import Button from './Button'
import useScript from '../../../hooks/useScript'

type ContactSalesProps = {
  ebanx_logo: string,
  title: string,
  subtitle: string,
  button: {
    link: { url: string },
    text: string,
  }[],
  form_area: {
    _uid: string,
    form_id: string,
    portal_id: string,
  }[],
  form_text: string,
}

const ContactSales = ({ blok }: { blok: ContactSalesProps }) => {
  const { ebanx_logo, title, subtitle, button, form_area } = blok
  useScript('/js/hubspot.js')
  return (
    <section className='bg-base1 flex flex-col items-center pt-5xl pb-9xl md:pb-9xl md:pt-14xl lg:py-9xl px-[24px]'>
      <EbanxLogo ebanx_logo={ebanx_logo} />
      <Title title={title} />
      <div className='max-w-[270px] md:max-w-full flex flex-col items-center md:flex-row md:items-start md:justify-center w-full mb-xl md:mb-3xl'>
        <Subtitle subtitle={subtitle} />
        <Button button={button[0]} />
      </div>
      <Form form_area={form_area[0]} />
    </section>
  )
}

export default ContactSales 