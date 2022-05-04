import { useEffect, useState } from "react"

type Props<T> = {
  data: T[]
}

export default function usePagination<T>(data: T[]) {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [ dataItems, setDataItems ] = useState(data ?? [])

  function nextPage() {
    const lastPage = Math.ceil(data.length / pageSize)
    const nextPage = currentPage === lastPage ? lastPage : currentPage + 1
    setCurrentPage(nextPage)
  }

  function prevPage() {
    const prevPage = currentPage === 1 ? 1 : currentPage - 1
    setCurrentPage(prevPage)
  }

  const totalPages = data && Math.ceil(data.length / pageSize)

  useEffect(() => {
    const items = data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    setDataItems(items)
  }, [currentPage, pageSize, data])

  useEffect(() => {
    setCurrentPage(1)
  }, [data])

  return { currentPage, 
           setCurrentPage, 
           pageSize, 
           setPageSize, 
           nextPage, 
           prevPage, 
           totalPages, 
           dataItems };
}