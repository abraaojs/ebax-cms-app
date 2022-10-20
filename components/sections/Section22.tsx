import React from 'react'
import { render } from 'storyblok-rich-text-react-renderer'

const Section22 = ({ blok }: { blok: any }) => {
  return (
    <section
      className="section_17 bg-base-2 text-content-light -mb-sct pt-sct relative rounded-b-sct"
      style={{ zIndex: -blok.zIndex }}
    >
      <div className="flex flex-col gap-lg md:gap-mb py-5xl px-lg md:py-9xl md:px-5xl">
        <div className="grid md:grid-cols-[1fr_2fr] gap-lg">
          <div className="order-last md:order-first">
            {blok.links_area.map((link_area: any, i: number) => (
              <div className="bg-base rounded-[16px] py-xl px-md" key={i}>
                <h5 className="text-[16px] font-secondary md:max-w-5xl">{link_area.title}</h5>
                <ul className="list-none">
                  {link_area.links.map((link: any, i2: number) => (
                    <span key={i2}>
                      <hr className="mt-lg mb-md border-1 border-base-2"></hr>
                      <li className="flex flex-row gap-sm">
                        <a href={link.link.url} className="text-[16px] font-bold color-primary">{link.label}</a>
                        <div>
                          <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                              <path d="M1 12.2323H15" stroke="#0051FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M11 16.2323L15 12.2323" stroke="#0051FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M11 8.2323L15 12.2323" stroke="#0051FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          </svg>
                        </div>
                      </li>
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-base rounded-[16px] p-lg">
            {render(blok.content_text)}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Section22
