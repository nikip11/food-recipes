import { Field } from "formik";

type Props = {
  id: string
  label: string
  disabled?: boolean
}

export default function CheckboxField(props: Props) {
  const { id, label, disabled = false } = props
  return (
    <label>
      {label}
      <Field type="checkbox" id={id} name={id} disabled={disabled} />
    </label>
  )
}