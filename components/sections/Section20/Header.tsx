import React from 'react'
import formatMarkdown from '../../../hooks/useMarkdown'
import formatClassString from '../../../utils/format.class.string'

const desktopTitleClass = `
  title-3 
  color-base-3
  uppercase 
`

const Header = ({
  title,
  eventTypes,
  countries,
  setEventTypeSelect,
  setCountrySelect
}: {
  title: string,
  eventTypes: any[] | undefined,
  countries: any[] | undefined,
  setEventTypeSelect: Function,
  setCountrySelect: Function,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h3 className={formatClassString(desktopTitleClass)}>
        {formatMarkdown(title, {
          bold: 'text-primary',
          italic: 'text-secondary'
        })}
      </h3>
      <div className="flex flex-col md:flex-row gap-6 mb-2xl md:mb-0">
        <div className="flex flex-col gap-2 w-[300px]">
          <label className="md:font-bold paragraph-3">Event Type</label>
          <select className="select-input" onChange={e => setEventTypeSelect(e.target.value)}>
            <option value="">Select an item</option>
            {eventTypes?.map((eventType) => (
              <option value={eventType.value}>{eventType.value}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 w-[300px]">
          <label className="md:font-bold paragraph-3">Country</label>
          <select className="select-input" onChange={e => setCountrySelect(e.target.value)}>
            <option value="">Select an item</option>
            {countries?.map((country) => (
              <option value={country.value}>{country.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Header
