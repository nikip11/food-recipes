import { ChangeEvent, useState } from "react";

type Props<T> = {
  data: T[],
  searchText: string
}

export default function useSearch<T>(props: Props<T>) {
  const { data, searchText } = props
  const [search, setSearch] = useState(searchText)
  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setSearch(value)
    setFilteredData(data.filter((item: T) => {
      return Object.values(item).some((val: any) => {
        if (typeof val === 'string' || typeof val === 'number') {
          return String(val).toLowerCase().includes(value.toLowerCase())
        }
        if (typeof val === 'object' && val !== null) {
          return Object.values(val).some((v: any) => {
            return String(v).toLowerCase().includes(value.toLowerCase())
          })
        }
        return false
      })
    }))
  }

  return { search, filteredData, handleSearch };
}
