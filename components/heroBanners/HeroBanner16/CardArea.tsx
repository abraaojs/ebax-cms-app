import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import mergeClassString from '../../../utils/merge.class.string'
import HorizontalCard from '../../atomics/HorizontalCard'
import { getValue } from '../../../hooks/utils'
import ButtonClear from '../../atomics/ButtonClear'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";


const desktopSubtitleClass = `
`
const mobileSubtitleClass = `
card_area flex flex-wrap gap-4 justify-between line -mr-5 md:overflow-x-visible pb-lg pr-lg
`

const CardArea = ({
  card_area,
}: {
  card_area: any
}) => {
  return (
    <div
      className={mergeClassString(mobileSubtitleClass, desktopSubtitleClass)}
    >
      <Swiper
        color="#fefefe"
        spaceBetween={16}
        pagination={true}
        modules={[Pagination]}
        className={`mySwiper`}
        breakpoints={{
          768: {
            // width: 576,
            slidesPerView: 4.5,
          },
          220: {
            // width: 768,
            slidesPerView: 1.4,
          },
        }}
        navigation>

        {card_area.map((card: any, i: number) => (
          <SwiperSlide key={i}>
            <div key={i} className="flex mb-10">
              <div key={card._uid}
                className={`horizontal_card p-xl rounded-2xl flex flex-col gap-6 bg-base-1 min-w-full text-center`}
              >
                <div className="items-center">
                  <img
                    className="w-[32px] mb-lg"
                    src={`/icons/${card.icon_type}.svg`}
                    alt={card.icon_type}
                  />
                  <h3 className="title-5 font-secondary">{card.title_text}</h3>
                </div>
                <div>
                  {card.button_area.map((button: any, i: number) => (
                    <ButtonClear key={i} blok={button} />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>






    </div>
  )
}

export default CardArea
