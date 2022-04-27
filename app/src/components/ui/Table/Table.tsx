import { ReactNode } from "react";
import usePagination from "./componets/hooks/usePagination";
import useSearch from "./componets/hooks/useSearch";
import InputSearch from "./componets/InputSearch";
import PaginationTable from "./componets/PaginationTable";
import TableHeader from "./componets/TableHeader";

export type ColumnType<T> = {
  label: string
  width?: string
  accesor: keyof T | ((item: T) => string | ReactNode)
}

type Props<T> = {
  columns: ColumnType<T>[]
  data: T[],
  searchField?: boolean
  toolbar?: ReactNode
}

export default function Table<T>(props: Props<T>) {
  const { columns, data, searchField = false, toolbar } = props
  const { search, filteredData, handleSearch } = useSearch<T>({ data, searchText: '' })
  const { prevPage, nextPage, currentPage, pageSize, setPageSize, totalPages, dataItems } = usePagination<T>(filteredData)

  return (
    <>
      <div className="grid grid-cols-2">
        <div>{searchField && <InputSearch search={search} handleSearch={handleSearch} />}</div>
        <div>{toolbar}</div>
      </div>
      <table className="table-auto border-collapse border border-slate-500 w-full bg-white">
        <TableHeader columns={columns} />
        <tbody>
          {dataItems.map((item: T, index: number) => (
            <tr key={index}>
              {columns.map(({ accesor }, i) => (
                <td key={i} className="border border-slate-400 p-2">
                  {typeof accesor == 'string' ? item[accesor] : accesor(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationTable prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} pageSize={pageSize} setPageSize={setPageSize} totalPages={totalPages} dataItems={dataItems} />
    </>
  )
}