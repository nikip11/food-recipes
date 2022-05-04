import useFetch from '@/hooks/useFetch'
import { Category } from '@/interfaces/types'

const API_URL = import.meta.env.VITE_APP_API_URL

type ResponseGetCategory = {
  categories: Category[] | null
  isPending: boolean
  error: Error | null
  getCategories: () => Promise<void>
}

export function useGetCategory(): ResponseGetCategory {
  const { data, executeFetch, error, isPending } = useFetch(`${API_URL}calories/categories`)

  const getCategories = async () => {
    await executeFetch({
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  return { categories: data?.data, error, isPending, getCategories }
}