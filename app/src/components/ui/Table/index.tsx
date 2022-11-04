import { ReactNode } from "react";
import usePagination from "./componets/hooks/usePagination";
import useSearch from "./componets/hooks/useSearch";
import InputSearch from "./componets/InputSearch";
import PaginationTable from "./componets/PaginationTable";
import TableBody from "./componets/TableBody";
import TableHeader from "./componets/TableHeader";
import { ColumnType } from "./types";

type Props<T> = {
  columns: ColumnType<T>[]
  data: T[],
  searchField?: boolean
  toolbar?: ReactNode
}

export default function Table<T>(props: Props<T>) {
  const { columns, data, searchField = false, toolbar } = props
  const { search, filteredData, handleSearch } = useSearch<T>({ data, searchText: '' })
  const { prevPage, nextPage, currentPage, pageSize, setPageSize, totalPages, dataItems, goLastPage, goFirstPage } = usePagination<T>(filteredData)

  return (
    <>
      <div className="grid grid-cols-2">
        <div>{searchField && <InputSearch search={search} handleSearch={handleSearch} />}</div>
        <div className="flex justify-end items-center">{toolbar}</div>
      </div>
      <table className="table-auto border-collapse rounded-md w-full bg-white">
        <TableHeader columns={columns} />
        <TableBody columns={columns} items={dataItems} />
      </table>
      <PaginationTable
        prevPage={prevPage}
        nextPage={nextPage}
        goLastPage={goLastPage}
        goFirstPage={goFirstPage}
        currentPage={currentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalPages={totalPages}
        dataItems={dataItems} />
    </>
  )
}