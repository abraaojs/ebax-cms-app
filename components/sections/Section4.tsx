import React from 'react'
import SquareCard from '../atomics/SquareCard'
import ButtonFilled from '../atomics/ButtonFilled'
import formatMarkdown from '../../hooks/useMarkdown'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import 'swiper/css/scrollbar';

const Section4 = ({ blok }: { blok: any }) => (
  <section
    className="section_4 bg-base-3 text-content-light -mb-sct pt-sct relative rounded-b-sct bg-cover min-w-0"
    style={{
      zIndex: -blok.zIndex,
      backgroundImage: `url(${blok.background_image.filename})`
    }}
  >
    <div className="stack gap-2xl pt-7xl pb-5xl px-lg md:pt-12xl md:pb-9xl md:pl-5xl max-w-[1366px] mx-auto">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-2xl">
          <h2 className="title-2 text-white md:text-center md:text-5xl uppercase">
            {formatMarkdown(blok.title_text, {
              bold: 'text-primary',
              italic: 'text-secondary'
            })}
          </h2>
          {blok.subtitle_text && (
            <p className="subtitle_text paragraph-2 font-bold max-w-3xl md:text-center text-white">{blok.subtitle_text}</p>
          )}
        </div>
      </div>

      <div
        className={`transition ease-in-out relative overflow-y-hidden`}
      >
        <Swiper
          color="#fefefe"
          spaceBetween={16}
          pagination={true}
          slidesPerView='auto'
          modules={[Scrollbar]}
          breakpoints={{
            768: {
              // width: 576,
              slidesPerView: 3.5,
            },
            220: {
              // width: 768,
              slidesPerView: 1.2,
            },
          }}
          scrollbar={{ draggable: true }}
        >
          {blok.card_area.map((card: any, i: number) => (
            <SwiperSlide key={i}>
              <SquareCard
                key={i}
                blok={card}
                className="mb-10 md:min-h-[300px] min-h-[360px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="button_area flex justify-center">
        {blok.button_area.map((button: any, i: number) => (
          <ButtonFilled key={i} blok={button} />
        ))}
      </div>
    </div>
  </section>
)

export default Section4
