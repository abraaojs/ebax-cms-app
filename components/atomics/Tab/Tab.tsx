import React, { Component, useState } from 'react'
import ButtonClear from '../ButtonClear'
import ButtonFilled from '../ButtonFilled'
import {
  MARK_BOLD,
  MARK_LINK,
  render
} from 'storyblok-rich-text-react-renderer'

type ContentProps = {
  contentList: any
  icon_type: string
  title_text: string
  isActive: boolean
  isActiveOnDesktop: boolean
}

type ParagraphProps = {
  _uid: string
  text: string
  component: string
  font_style?: string
}

type LinkProps = {
  id: string
  url: string
  linktype: string
  fieldtype: string
}

type ButtonProps = {
  _uid: string
  text: string | object
  component: string
  link?: LinkProps
  type?: string
  color?: string
  shadow?: string
  show_icon?: boolean
}

type ListProps = {
  _uid: string
  component: string
  font_color: string
  items_text: string
}

// TODO: remove the any type
const List = ({ props }: ListProps | any) => {
  const items: string[] = props.items_text.split('\n')
  const listClass = `p-4 text-primary font-bold py-0 pr-0 mt-6`
  const itemClass = `p-1 text-sm`
  return (
    <ul className={listClass}>
      {items.map((item: string, i: number) => (
        <li className={itemClass} key={i}>
          {item}
        </li>
      ))}
    </ul>
  )
}
const Button = ({
  _uid,
  text,
  type,
  color,
  shadow,
  component,
  show_icon,
  link
}: ButtonProps) => {
  const buttonFilledClass = `flex justify-center mt-6 md:justify-start`
  const buttonClearClass = `flex mt-6 mb-4 md:mb-0`
  switch (type) {
    case 'filled':
      return (
        <div className={buttonFilledClass}>
          <ButtonFilled blok={{ text }} link={link?.url} />
        </div>
      )
    default:
      return (
        <div className={buttonClearClass}>
          <ButtonClear blok={{ text }} link={link?.url} />
        </div>
      )
  }
}

const Paragraph = ({ _uid, text, component, font_style }: ParagraphProps) => {
  // TODO: format text to deal with links
  const bold = font_style === 'bold' ? 'font-bold' : ''
  const paragraphClass = `text-sm md:mt-6 mt-4 ${bold}`
  return <div className={paragraphClass}>{render(text)}</div>
}

const Content = ({
  contentList,
  icon_type,
  title_text,
  isActive,
  isActiveOnDesktop
}: ContentProps) => {
  const COMPONENT_TYPES = {
    PARAGRAPH: 'paragraph',
    BUTTON: 'button',
    FORM: 'form',
    LIST: 'list'
  }
  const containerClass = `${isActive ? 'block' : 'hidden'} md:${
    isActiveOnDesktop ? 'block' : 'hidden'
  }`
  const cardContainer = `hidden md:flex md:flex-row mt-8`
  const imageClass = `w-8`
  const titleClass = `text-3xl pl-2 `
  const iconSource = `/icons/${icon_type}.svg`

  return (
    <div className={containerClass}>
      <div className={cardContainer}>
        <img className={imageClass} src={iconSource} alt={icon_type} />
        <h2 className={titleClass}>{title_text}</h2>
      </div>
      {contentList.map((content: any, i: number) => {
        const isParagraph = content.component === COMPONENT_TYPES.PARAGRAPH
        const isButton = content.component === COMPONENT_TYPES.BUTTON
        const isForm = content.component === COMPONENT_TYPES.FORM
        const isList = content.component === COMPONENT_TYPES.LIST
        if (isParagraph)
          return (
            <Paragraph
              _uid={content._uid}
              text={content.text}
              component={content.component}
              font_style={content.font_style}
              key={content._uid}
            />
          )
        if (isButton)
          return (
            <Button
              _uid={content._uid}
              text={content.text}
              type={content.type}
              color={content.color}
              shadow={content.shadow}
              component={content.component}
              show_icon={content.show_icon}
              key={content._uid}
            />
          )
        if (isForm)
          return (
            <div
              key={content._uid}
              className="hbspt-form mt-md"
              data-form-id={content.form_id}
              data-portal-id={content.portal_id}
            ></div>
          )

        if (isList) return <List key={content._uid} props={content} />
      })}
    </div>
    // <List />
    //
    // <Button />
  )
}

const Tab = ({ props }: { props: any }) => {
  const [active, setActive] = useState(false)
  const [desktop, setDesktop] = useState(false)
  const base = `md:flex md:flex-row  md:justify-between`
  const ContainerClass = `
    bg-white p-4  
    md:rounded-2xl
    rounded-xl	 
    md:px-8 md:max-w-[916px] md:${props.isActiveOnDesktop ? 'block' : 'hidden'}
    drop-shadow-md	
    md:pb-9
    md:px-4
    md:py-0
    `
  const mobileTabContainerClass = `bg-white flex  justify-between  hover:cursor-pointer md:hidden`

  const tabTitleClass = `text-[16px] font-secondary `
  return (
    <div className={`${base}`}>
      <div className={ContainerClass}>
        <div
          className={mobileTabContainerClass}
          onClick={() => setActive(!active)}
        >
          <h1 className={tabTitleClass}>{props.title_text}</h1>
          <i className="i-bi-chevron-down text-dark text-content-dark lg:display-none"></i>
        </div>
        <Content
          title_text={props.title_text}
          icon_type={props.icon_type}
          contentList={props.content_area}
          isActive={active}
          isActiveOnDesktop={props.isActiveOnDesktop}
        />
      </div>

      {/* <pre>{JSON.stringify(props, undefined, 2)}</pre> */}
    </div>
  )
}

export default Tab
