import { LeftIcon, RightIcon } from "@/components/Icons"
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
    <div className="mt-4 flex justify-center items-center">
      <div className="mx-2">
        <Button onClick={prevPage} style="icon" disabled={currentPage === 1}><LeftIcon /></Button>
        <Button onClick={nextPage} style="icon" disabled={currentPage === totalPages}><RightIcon /></Button>
      </div>
      <div className="mx-2">
        {currentPage}/{totalPages}
      </div>
      {dataItems.length > pageSize && <span>{`${currentPage}{' / '}${totalPages}`}</span>}
      <div className="mx-2">
        <select onChange={handleChange} value={pageSize}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  )
}