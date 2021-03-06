import { Field, useField } from "formik";
import { string } from "yup";
import ClearButton from "./components/ClearButton";
import FormControl from "./FormControl";
import Label from "./Label";

type Props = {
  id: string
  label?: string
  required?: boolean
  type?: string
  placeholder?: string
  require?: boolean
}

export default function TextField(props: Props) {
  const { id, label, required = false, type = 'text', placeholder } = props
  const [field, _meta, helpers] = useField(id)
  const value = (field.value && field.value !== 0) ? field.value : null

  function clearField() {
    helpers.setValue('', true)
  }

  return (
    <FormControl>
      {label && (<Label htmlFor={id}>{label}</Label>)}
      <div className="relative">
        <Field
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          type={type}
          className="w-full rounded-md p-2 border"
          require
        />
        {value && (
          <ClearButton onClick={clearField} />
        )}
      </div>
    </FormControl>
  )
}