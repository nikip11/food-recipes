import { ChangeEvent, useState } from "react"
import Button from "../../Button"
import usePagination from "./hooks/usePagination"

type Props<T> = {
  prevPage: () => void
  nextPage: () => void
  currentPage: number
  pageSize: number
  setPageSize: (pageSize: number) => void
  totalPages: number
  dataItems: T[]
}

export default function PaginationTable<T>(props: Props<T>) {
  const { prevPage, nextPage, currentPage, pageSize, setPageSize, totalPages, dataItems } = props

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target
    setPageSize(Number(value))
  }

  return (
    <div className="mt-4">
      <Button onClick={prevPage} style="icon" disabled={currentPage === 1}>{'<'}</Button>
      <Button onClick={nextPage} style="icon" disabled={currentPage === totalPages}>{'>'}</Button>
      {currentPage}---{totalPages}
      {dataItems.length > pageSize && <span>{`${currentPage}/${totalPages}`}</span>}
      <select onChange={handleChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
      </select>
    </div>
  )
}