import React from 'react'
import { Link } from '../../renderer/Link'

export default function Footer({ props, hidden }: { props: any, hidden: string }) {
  const { content } = props ?? {}
  return (
    <footer className={`relative mt-radius-primary bg-base-3 text-white ${hidden}`}>
      <div className="absolute pointer-events-none w-full top-[1px] translate-y-[-100%] flex justify-between items-end">
        <div className="w-radius-primary aspect-square"></div>
        <div className="flex justify-center items-center pointer-events-auto">
          <svg
            viewBox="0 0 276 49"
            className="fill-base-3 h-full w-full max-h-[49px] aspect-[276/49]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M75.1 19.7C41.22 41.8 10.8 48.36.87 48.36c98.72 0 291.92-.12 273.22-.12-23.38 0-46.71-3.6-84.13-28.56-38.05-25.37-73.3-27.13-114.86 0Z" />
          </svg>
          <div className="absolute uppercase bottom-0 flex flex-col gap-xs items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                fill="#fff"
                d="M.19 6.19a.6.6 0 1 0 .85.85l-.85-.85ZM6.61.61 7.04.2a.6.6 0 0 0-.85 0l.42.42Zm5.58 6.43a.6.6 0 0 0 .85-.85l-.85.85Zm-11.15 0 6-6-.85-.85-6 6 .85.85Zm5.15-6 6 6 .85-.85-6-6-.85.85Z"
              />
            </svg>
            <div>{content.button_title}</div>
          </div>
        </div>
        <div className="w-radius-primary aspect-square"></div>
      </div>
      <div className="px-xl lg:px-7xl pb-3xl pt-9xl">
        <div className="grid-cols-2 gap-md lg:grid-cols-8">
          {content.children.map(
            ({ Label, Link: { url }, children = [] }: any, i: number) => (
              <div key={i} className="flex flex-col px-sm">
                <div className="flex justify-between text-sm font-bold uppercase">
                  <Link className="text-content-dark" href={url}>
                    {Label}
                  </Link>
                  <i className="i-bi-chevron-down text-base text-content-dark lg:display-none"></i>
                </div>
                <hr className="display-none lg:block my-md border-primary-light opacity-25" />
                <div className="display-none lg:flex flex-col gap-sm text-sm font-light">
                  {children.map(({ label, link: { url } }: any, k: number) => (
                    <Link key={k} className="text-content-dark" href={url}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
        <div className="stack gap-md">
          <div className="flex justify-between mt-3xl">
            <img
              className="h-5"
              src="/logo/ebanx_logo_white.svg"
              alt="EBANX logo"
            />
            <div className="flex title-6 uppercase gap-lg">
              {content.social_title}
              <div className="flex gap-md">
                <i className="i-bi-linkedin"></i>
                <i className="i-bi-instagram"></i>
                <i className="i-bi-twitter"></i>
                <i className="i-bi-facebook"></i>
              </div>
            </div>
          </div>
          <hr />
          <div className="paragraph-4">{content.footer_advice}</div>
        </div>
      </div>
    </footer>
  )
}