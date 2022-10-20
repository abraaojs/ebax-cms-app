import React, { useState } from "react"
import Dropdown from "./Dropdown"
import TableHeaderDesktop from "./TableHeaderDesktop"
import TableTitle from "./TableTitle"
import DropdownMobile from "./DropdownMobile"
import PaymentsByFlag from "./PaymentsByFlag"

const Table62Payments = ({ continents, title, tag_payment_methods, support_text_mobile }: any) => {
  const [countrySelected, setCountrySelected] = useState(continents[0].content.countries[0].content)
  return (
    <div className="w-full md:flex md:justify-between ">
      <Dropdown continents={continents} setCountrySelected={setCountrySelected} />
      <div className="px-lg py-[32px] rounded-[10px] bg-white w-full mt-[40px] md:max-w-[69%]">
        <TableHeaderDesktop countrySelected={countrySelected} />
        <TableTitle title={support_text_mobile} />
        <DropdownMobile continents={continents} setCountrySelected={setCountrySelected} />
        <PaymentsByFlag countrySelected={countrySelected} tag_payment_methods={tag_payment_methods} />
      </div>
    </div>
  )
}
export default Table62Payments