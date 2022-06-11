import useFetch from '@/hooks/useFetch'
import { Recipe } from '@/interfaces/types'

const API_URL = import.meta.env.VITE_APP_API_URL

type ResponseProps = {
  isPending: boolean
  error: Error | null
}

interface ResponseGetRecipe extends ResponseProps {
  recipes: Recipe[] | null
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


interface SaveResponse extends ResponseProps {
  data: Recipe | null
  saveRecipe: (word: Recipe) => Promise<void>
}

export function useSaveRecipe(): SaveResponse {
  const { data, error, isPending, executeFetch } = useFetch(`${API_URL}calories/save/recipe`)

  const saveRecipe = async (recipe: Recipe) =>
    await executeFetch({
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return { data, error, isPending, saveRecipe }
}