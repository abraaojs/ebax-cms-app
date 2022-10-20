import React from 'react'
import formatMarkdown from '../../hooks/useMarkdown'
import Quote from '../atomics/Quote'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import 'swiper/css/scrollbar';

const Section15 = ({ blok }: { blok: any }) => (
  <section
    className="section_15 bg-base text-content-light -mb-sct pt-sct relative rounded-b-sct"
    style={{ zIndex: -blok.zIndex }}
  >
    <div className="flex flex-col py-5xl px-lg md:py-9xl md:px-5xl">
      <div className="flex flex-col justify-center items-center gap-md">
        <h1 className="title_text title-1 font-primary text-center max-w-3xl">
          {formatMarkdown(blok.title_text, {
            bold: 'text-primary',
            italic: 'text-secondary'
          })}
        </h1>
        <p className="paragraph-2 font-secondary text-center mb-lg md:mb-2xl  md:max-w-[728px]">
          {blok.support_text}
        </p>
      </div>

      <div
        className={`transition ease-in-out overflow-y-hidden`}
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
          {blok.quote_area.map((quote: any, i: number) => (
            <SwiperSlide key={i}>
              <div key={i} className="min-w-[256px] md:min-w-[384px] min-h-[290px] md:min-h-[200px] pt-xl flex mb-10">
                <Quote blok={quote} className="p-xl flex-col justify-between" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="quote_area gap-md line hide-scrollbar">
        {blok.quote_area.map((quote: any, i: number) => (
          <div key={i} className="min-w-[256px] md:min-w-[384px] pt-xl flex">
            <Quote blok={quote} className="p-xl flex-col justify-between" />
          </div>
        ))}
      </div> */}
    </div>
  </section>
)

export default Section15
