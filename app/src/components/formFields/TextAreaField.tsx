import { Field, useField } from "formik";
import { string } from "yup";
import ClearButton from "./components/ClearButton";
import FormControl from "./FormControl";
import Label from "./Label";

type Props = {
  id: string
  label: string
  required?: boolean
  type?: string
  placeholder?: string
  require?: boolean
}

export default function TextAreaField(props: Props) {
  const { id, label, required = false, type = 'text', placeholder, require = false } = props
  const [field, _meta, helpers] = useField(id)

  function clearField() {
    helpers.setValue('', true)
  }

  return (
    <FormControl>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Field
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          type={type}
          className="w-full rounded-md p-2 border"
          component="textarea"
          require
        />
        {field.value && (
          <ClearButton onClick={clearField} />
        )}
      </div>
    </FormControl>
  )
}