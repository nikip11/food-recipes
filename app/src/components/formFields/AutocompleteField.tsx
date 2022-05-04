import { Field, useField } from "formik"
import { MouseEventHandler, useCallback, useState } from "react"
import Label from "./Label"
import { Combobox } from '@headlessui/react'
import FormControl from "./FormControl"
import ClearButton from "./components/ClearButton"

type AutocompleteProps<T> = {
  id: string
  label: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  items: T[] | null
  itemKey: keyof T
  multiple?: boolean
}

export default function AutocompleteField<T>(props: AutocompleteProps<T>) {
  const { id, label, placeholder, required, items, itemKey, multiple = false, disabled = false } = props
  const [_field, _meta, helpers] = useField(id);

  const [selectedItem, setSelectedItem] = useState<T | null>(null)
  const [query, setQuery] = useState('')

  const filteredItem =
    query === ''
      ? items
      : items?.filter((item) => {
        return item[itemKey].toLowerCase().includes(query.toLowerCase())
      })

  const handleSelect = (item: T) => {
    setSelectedItem(item)
    helpers.setValue(item)
  }

  return (
    <FormControl>
      <Label>{label}</Label>
      <Combobox value={selectedItem} onChange={handleSelect} name={id} multiple={multiple} disabled={disabled}>
        <div className="relative">
          <div className="relative">
            <Combobox.Input onChange={(event) => setQuery(event.target.value)} className="w-full border rounded-md p-2" displayValue={(item: T) => item ? item[itemKey] : ''} />
            <Combobox.Button>
              <ClearButton />
            </Combobox.Button>

          </div>
          {/* <Combobox.Options className="absolute w-full bg-white overflow-auto max-h-64 focus:outline-none"> */}
          <Combobox.Options className="focus:outline-none absolute max-h-60 w-full overflow-auto bg-white border">
            {items?.map((item: T) => (
              <Combobox.Option key={item[itemKey]} value={item} className="relative">
                {({ selected, active }) => (
                  <div className={`${selected ? 'bg-yellow-500' : ''} ${active ? 'bg-yellow-300' : ''} p-2 cursor-pointer`}>
                    {item[itemKey]}
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </FormControl>
  )
}
