import useFetch from '@/hooks/useFetch'
import { Food } from '@/interfaces/types'
import { useCallback } from 'react'

const API_URL = import.meta.env.VITE_APP_API_URL

type ResponseProps = {
  isPending: boolean
  error: Error | null
}

interface ResponseGetFood extends ResponseProps {
  data: Food[] | null
  isPending: boolean
  error: Error | null
  getFoods: () => Promise<void>
}

export function useGetFoods(): ResponseGetFood {
  const { data, error, isPending, executeFetch } = useFetch(`${API_URL}calories/food`)

  const getFoods = async () => {
    await executeFetch({
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  return { data: data?.data, error, isPending, getFoods }
}

interface SaveResponse extends ResponseProps {
  data: Food | null
  saveFood: (word: Food) => Promise<void>
}

export function useSaveFood(): SaveResponse {
  const { data, error, isPending, executeFetch } = useFetch(`${API_URL}calories/save/food`)

  const saveFood = async (food: Food) =>
    await executeFetch({
      method: 'POST',
      body: JSON.stringify(food),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return { data, error, isPending, saveFood }
}

interface DeleteResponse extends ResponseProps {
  data: Food | null
  deleteFood: (word: Food) => Promise<void>
}
export function useDeleteFood(): DeleteResponse {
  const { data, error, isPending, executeFetch } = useFetch(`${API_URL}calories/food/delete`)

  const deleteFood = async (food: Food) =>
    await executeFetch({
      method: 'POST',
      body: JSON.stringify(food),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return { data, error, isPending, deleteFood }
}
