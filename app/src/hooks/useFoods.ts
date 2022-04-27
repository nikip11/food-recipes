import useFetch from '@/hooks/useFetch'
import { Food } from '@/interfaces/types'
import { useCallback } from 'react'

const API_URL = import.meta.env.VITE_APP_API_URL

// interface GetProps extends UseProps {
//   data: Word[] | null
//   getWords: () => Promise<void>
// }
type ResponseGetFood = {
  data: Food[] | null
  isPending: boolean
  error: string | null
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

// export function useGetWords(): GetProps {
//   const { data = null, error, isPending, executeFetch } = useFetch(`${API_URL}games/words`)

//   const getWords = async () =>
//     await executeFetch({
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//   return { data, error, isPending, getWords }
// }

// export function useGetWordsByCategorySlug(slug: string): GetProps {
//   const {
//     data = null,
//     error,
//     isPending,
//     executeFetch
//   } = useFetch(`${API_URL}games/words/category/${slug}`)

//   const getWords = async () =>
//     await executeFetch({
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//   return { data, error, isPending, getWords }
// }

// interface SaveProps extends UseProps {
//   data: Word | null
//   saveWord: (word: Word) => Promise<void>
// }

// export function useSaveWord(): SaveProps {
//   const { data, error, isPending, executeFetch } = useFetch(`${API_URL}games/words/save`)

//   const saveWord = async (word: Word) =>
//     await executeFetch({
//       method: 'POST',
//       body: JSON.stringify(word),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//   return { data, error, isPending, saveWord }
// }