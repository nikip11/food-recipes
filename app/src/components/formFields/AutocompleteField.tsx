import { useField } from "formik"
import { useState } from "react"
import Label from "./Label"
import { Combobox } from '@headlessui/react'
import FormControl from "./FormControl"
import ClearButton from "./components/ClearButton"
import { ArrowDown, AddIcon } from '@/components/Icons';
import MiniButton from '@/components/ui/MiniButton';

type AutocompleteProps<T> = {
  id: string
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  items: T[] | null
  itemKey?: keyof T
  multiple?: boolean
  className?: string
  addNew?: (query: string) => void
}

function getItem<T>(item: T, key?: keyof T): string {
  if (item) {
    return String(key && item ? item[key] : item)
  }
  return ''
}

export default function AutocompleteField<T>(props: AutocompleteProps<T>) {
  const { id, label, placeholder, required, items, itemKey, multiple = false, disabled = false, className, addNew } = props
  const [field, _meta, helpers] = useField(id);

  const [selectedItem, setSelectedItem] = useState<T | T[] | null>(field.value)
  const [query, setQuery] = useState('')

  const filteredItem =
    query === ''
      ? items
      : items?.filter((item) => {
        return getItem(item, itemKey).toLowerCase().includes(query.toLowerCase())
      })

  const handleSelect = (item: T) => {
    setSelectedItem(item)
    helpers.setValue(item)
    setQuery('')
  }

  function addNewHandle() {
    addNew && addNew(query)
  }

  function clearField() {
    setSelectedItem(null)
    helpers.setValue(null)
    setQuery('')
  }


  return (
    <FormControl>
      {label && <Label>{label}</Label>}
      <Combobox value={selectedItem} onChange={handleSelect} name={id} multiple={multiple} disabled={disabled}>
        <div className="relative `${className}`">
          <div className="relative">
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="w-full border rounded-md p-2"
              displayValue={(item: T) => getItem(item, itemKey)}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
            />

            {field.value && selectedItem && (
              <ClearButton onClick={clearField} />
            )}

            {query && filteredItem?.length === 0 && addNew && (
              <div className="absolute top-1 right-14">
                <MiniButton
                  type="button"
                  onClick={addNewHandle}
                >
                  <AddIcon />
                </MiniButton>
              </div>
            )}

            <Combobox.Button className="absolute top-2 right-1">
              <ArrowDown />
            </Combobox.Button>

          </div>
          <Combobox.Options className="focus:outline-none absolute max-h-60 w-full overflow-auto bg-white border z-50" unmount={false}>
            {filteredItem?.map((item: T, index) => (
              <Combobox.Option key={`${item}-${index}`} value={item} className="relative">
                {({ selected, active }) => (
                  <div className={`${selected ? 'bg-yellow-500' : ''} ${active ? 'bg-yellow-300' : ''} p-2 cursor-pointer`}>
                    {getItem(item, itemKey)}
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </FormControl >
  )
}
