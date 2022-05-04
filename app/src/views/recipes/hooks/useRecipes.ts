import useFetch from '@/hooks/useFetch'
import { Recipe } from '@/interfaces/types'

const API_URL = import.meta.env.VITE_APP_API_URL

type ResponseGetRecipe = {
  recipes: Recipe[] | null
  isPending: boolean
  error: Error | null
  getRecipes: () => Promise<void>
}

export function useGetRecipes(): ResponseGetRecipe {
  const { data, error, isPending, executeFetch } = useFetch(`${API_URL}calories/recipe/all`)

  const getRecipes = async () => {
    await executeFetch({
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  return { recipes: data?.data, error, isPending, getRecipes }
}

