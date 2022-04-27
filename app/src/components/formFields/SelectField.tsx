import { Field } from "formik";

type Props<T> = {
  id: string
  label: string
  items: T[]
}

export default function SelectField<T>(props: Props<T>) {
  const { id, label, items } = props
  return (
    <div>
      <label>
        {label}
      </label>
      <Field type="select" id={id} name={id}>
        {items.map((item: T) => {
          <option value={item}>item</option>
        })}
      </Field>
    </div>

  )
}