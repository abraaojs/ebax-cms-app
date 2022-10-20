import React from 'react'

export type FormProps = {
  _uid: string,
  form_id: string,
  portal_id: string,
}

const Form = ({
  form_area,
}: {
  form_area: FormProps,
}) => (
  <div
    key={form_area._uid}
    className="hbspt-form form-columns-2 bg-base p-xl rounded-sm flex  flex-col w-full items-center max-w-[327px] md:max-w-[707px]"
    data-form-id={form_area.form_id}
    data-portal-id={form_area.portal_id}
  >
  </div>
)

export default Form
