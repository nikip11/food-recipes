import { Field } from "formik";

type Props = {
  id: string
  label: string
}

export default function RadioField(props: Props) {
  const { id, label } = props
  return (
    <label>
      <Field type="radio" id={id} name={id} value={label} />
      {label}
    </label>
  )
}