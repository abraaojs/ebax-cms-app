import React from 'react'
import ButtonClear from "../ButtonClear"
import Tag from '../Tag'

const PaymentsByFlag = ({
  countrySelected,
  tag_payment_methods,
}: any) => {
  const randomNumber = () => Math.floor(Math.random() * 10)
  return (
    <>
      {countrySelected?.payment_group?.map((paymentGroup: any, index: number) => (
        <div key={`${paymentGroup._uid}${randomNumber()}${index}`} className={`mt-lg md:border-b-solid md:border-b-[1px] md:border-b-[#F2F2F2] md:pb-[8px]`} >
          <div className="bg-[#F0F4FD] rounded-[5px] p-[6px] mb-[16px] md:p-[0px] md:mb-[0px] md:bg-white md:flex md:w-full ">
            <h6 className="text-[14px] font-700 font-secondary text-[#001F60] md:w-[64%]">{paymentGroup.payment_category.name}</h6>
            {index === 0 ? (
              <div className=" hidden md:flex md:max-w-[700px]  md:justify-end md:text-[#000E2B] md:font-700 md:font-secondary md:w-[36%]  md:max-w-auto mb-[10px] md:items-center">
                {tag_payment_methods.map((tag_payment_method: any) => (
                  <span key={`${tag_payment_method._uid}${index}${randomNumber()}${randomNumber()}`} className=" text-center w-full md:bg-[#FBFBFB] md:mr-[5px] lg:mr-[16px] !md:w-[67px] md:text-[12px]">{tag_payment_method.name}</span>
                ))}
              </div>
            ) : ""}
          </div>
          <div className='md:flex md:justify-between'>
            <div>
              <div className="md:flex flex flex-col md:items-start md:flex-row items-center justify-between">
                <div className="flex w-full items-center flex-wrap mx-auto md:mt-[18px] max-w-[366px] md:max-w-[100%] md:items-start md:mx-none ">
                  {paymentGroup?.payment_methods?.map((paymentMethods: any) => (
                    <div key={`${randomNumber()}${randomNumber()}${index}${randomNumber()}`} className="flex items-center min-w-[50%] mb-[20px] md:mr-[15px] md:min-w-[150px]">
                      <img className="max-w-[33px] mr-[5px] md:max-w-[50px]" src={`/payment-options/${paymentMethods?.content?.logo}.svg`} alt={paymentMethods?.name} />
                      <span className="text-[12px]">{paymentMethods?.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" flex md:hidden max-w-[366px] justify-between mx-auto mb-[16px]">
                {tag_payment_methods.map((tag_payment_method: any, index: number) => {
                  if (paymentGroup?.tag_payment_methods?.includes(tag_payment_method.name)) {
                    return <Tag key={`${tag_payment_method._uid}mobile${index}`} hiddeText={true} blok={{ text: tag_payment_method.name }} className={` md:mr-[5px] lg:mr-[16px] !bg-[#FBFBFB] !px-[16px] !py-[13px] !my-[0px] !rounded-[8px] w-[131px] !pr-[24px] !text-[12px] !md:text-[0px] !max-w-[200px] md:min-w-[67px] !md:w-[67px] md:flex md:flex-col md:items-center md:justify-center`} />
                  }
                })}
              </div>
              {paymentGroup?.button?.[0] && (
                <ButtonClear blok={paymentGroup.button[0]} link="" className="text-[12px] mt-[30px]" />
              )}

            </div>

            <div className="justify-between hidden md:flex">
              {tag_payment_methods.map((tag_payment_method: any, index: number) => {
                if (paymentGroup?.tag_payment_methods?.includes(tag_payment_method.name)) {
                  return <Tag key={`${tag_payment_method._uid}desktop${index}`} hiddeText={true} blok={{ text: tag_payment_method.name }} className={` md:mr-[5px] lg:mr-[16px] !bg-[#FBFBFB] !px-[16px] !py-[13px] !my-[0px] !rounded-[8px] w-[131px] !pr-[24px] !text-[12px] !md:text-[0px] !max-w-[200px] md:min-w-[67px] !md:w-[67px] !md:h-full md:flex md:flex-col md:items-center md:justify-center`} />
                }
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default PaymentsByFlag 
