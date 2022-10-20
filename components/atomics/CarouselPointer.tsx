import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import formatMarkdown from "../../hooks/useMarkdown"
import { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";

type CarouselPointerProps = {
  card_carousel: {
    slider_cards: object[],
  }
  className?: string
  paddingLeft: any,
}

const CarouselPointer = (props: CarouselPointerProps) => {
  const { card_carousel, className, paddingLeft } = props
  return (
    <>
      <div
        className={`transition ease-in-out relative overflow-y-hidden`}
      >
        <Swiper
          color="#fefefe"
          spaceBetween={0}
          pagination={true}
          modules={[Pagination]}
          className={`mySwiper ${className ? className : ''}`}
          breakpoints={{
            768: {
              // width: 576,
              slidesPerView: 3.3,
            },
            220: {
              // width: 768,
              slidesPerView: 1.2,
            },
          }}
          navigation>
          {card_carousel.slider_cards.map((card: any, index) => (
            <SwiperSlide key={index} className={index === 0 ? paddingLeft : ""}>
              <img
                className={`w-[50px] h-[55px] mb-[10px]`}
                src={`/icons/${card.icon}.svg`}
                alt={card.icon}
              />
              <div className="w-[10px] h-[10px] border-2 rounded-full border-[#79A1F9] relative top-[6px] bg-white"></div>
              <div className={`border-t-2 border-t-[#B6CAF5] pt-[20px] min-h-[130px] pb-[42px]`}>
                <p className="title-8 max-w-[200px] md:max-w-[300px]">{formatMarkdown(card.text, {
                  bold: 'font-bold',
                  italic: 'font-italic'
                }
                )}</p>
              </div>
            </SwiperSlide>))}
        </Swiper>
      </div>
    </>
  )
}

export default CarouselPointer