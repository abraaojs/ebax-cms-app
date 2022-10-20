import React from 'react'
import { useState, useEffect } from 'react'
import mergeClassString from '../../../utils/merge.class.string'
import ImageCard from '../../atomics/ImageCard'
import CardLogoDateWithDetails from '../../atomics/CardLogoDateWithDetails'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Scrollbar } from 'swiper'

const desktopCardClass = `
`
const mobileCardClass = `
  min-h-[189px] 
  mb-2xl
`

const CardArea = ({
  card_area,
  className
}: {
  card_area: any
  className?: string
}) => {
  const [isMobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(window.innerWidth <= 768);

    const updateMedia = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [])

  return (
    <div>
      {
        isMobile ? (
          <div className='card_area gap-6 md:line' >
            {
              card_area.map((card: any, i: number) => (
                <CardLogoDateWithDetails key={i} blok={card} className={mergeClassString(mobileCardClass, desktopCardClass)} />
              ))
            }
          </div >
        ) : (

          <div
            className={`transition ease-in-out relative overflow-y-hidden`}
          >
            <Swiper
              color="#fefefe"
              spaceBetween={24}
              pagination={true}
              modules={[Scrollbar]}
              className={`mySwiper ${className ? className : ''}`}
              breakpoints={{
                768: {
                  slidesPerView: 3.5,
                },
                220: {
                  slidesPerView: 1.2,
                },
              }}
              scrollbar={{ draggable: true }}>
              {card_area.map((card: any, i: number) => (
                <SwiperSlide key={i}>
                  <CardLogoDateWithDetails key={i} blok={card} className={mergeClassString(mobileCardClass, desktopCardClass)} />
                </SwiperSlide>))}
            </Swiper>
          </div >
        )
      }
    </div>
  )
}

export default CardArea
