import React from 'react'
import Breadcrumb from './Breadcrumb'
import Button from './Button'
import Title from './Title'
import Subtitle from './Subtitle'
import Cards from './Cards'
import PartnersLogos from './PartnersLogos'
import SupportText from './SupportText'
import Container from "../../atomics/Container"

const Section51 = ({ blok }: { blok: any }) => {
  const { breadcrumb, title, subtitle, horizontal_cads, partners_title, partners_logos, button, background_image } = blok
  return (
    <section className='w-full py-5x2 text-xmd md:py-9xl relative rounded-b-sct bg-cover bg-center -mb-sct '
      style={{
        backgroundImage: `url(${background_image.filename})`,
        zIndex: 0,
      }}>
      <Container paddingX='md:px-5x2'>
        <Breadcrumb url={breadcrumb[0].link.url} text={breadcrumb[0].text} />
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
        <Cards horizontal_cads={horizontal_cads} />
        <SupportText partners_title={partners_title} />
        <PartnersLogos partners_logos={partners_logos} />
        <Button Button={button[0]} />
      </Container>
    </section>
  )

}
export default Section51