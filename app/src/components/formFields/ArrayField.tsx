import { Field, FieldArray } from "formik";
import { ReactNode } from "react";
import { AddIcon, TrashIcon } from "../Icons";
import Button from "../ui/Button";
import FormControl from "./FormControl";
import Label from "./Label";

type FieldProps<T> = {
  id: string
  label?: string
  renderFields: (props: T, index: number) => ReactNode | ReactNode[]
}

export default function ArrayField<T>(props: FieldProps<T>) {
  const { id, label, renderFields } = props

  return (
    <FormControl>
      {label && <Label>{label}</Label>}
      <FieldArray
        name={id}
        render={arrayHelpers => (
          <div>
            <div className="flex justify-end -mt-6 mb-3">
              <Button style="icon" onClick={() => arrayHelpers.push({})}><AddIcon /></Button>
            </div>
            {(arrayHelpers.form.values[id] && arrayHelpers.form.values[id].length > 0 && (
              arrayHelpers.form.values[id].map((item: T, index: number) => (
                <div key={index} className="flex items-center">
                  <div className="w-full">
                    {renderFields(item, index)}
                  </div>
                  <div>
                    <Button style="icon" onClick={() => arrayHelpers.remove(index)}><TrashIcon /></Button>
                  </div>
                </div>
              ))
            ))}
          </div>
        )
        }
      />
    </FormControl >

  )
}