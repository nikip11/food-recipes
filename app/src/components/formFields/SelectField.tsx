import { Field } from "formik";

type Props<T> = {
  id: string
  label: string
  items: T[]
  itemKey: keyof T
  itemValue: keyof T
}

export default function SelectField<T>(props: Props<T>) {
  const { id, label, items, itemValue } = props
  return (
    <div>
      <label>
        {label}
      </label>
      <Field type="select" id={id} name={id}>
        {items.map((item: T) => {
          const value = String(item[itemValue])
          return (<option value={value}>item[itemKey]</option>)
        })}
      </Field>
    </div>
  )
}