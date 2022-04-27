import { Field } from "formik";
import { string } from "yup";

type Props = {
  id: string
  label: string
  required?: boolean
  type?: string
  placeholder?: string
}

export default function TextField(props: Props) {
  const { id, label, required = false, type = 'text', placeholder } = props
  return (
    <div className="">
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={id} placeholder={placeholder} required={required} type={type} />
    </div>
  )
}