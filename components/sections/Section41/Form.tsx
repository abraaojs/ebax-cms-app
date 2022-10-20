import React from 'react'
import useScript from '../../../hooks/useScript'

export type FormProps = {
  _uid: string,
  form_id: string,
  portal_id: string,
}

const Form = ({
  form_area,
}: {
  form_area: FormProps
}) => (
  <div
    key={form_area._uid}
    className="hbspt-form form-columns-2 
    bg-base p-xl rounded-sm"
    data-form-id={form_area.form_id}
    data-portal-id={form_area.portal_id}
  ></div>
)

export default Form
