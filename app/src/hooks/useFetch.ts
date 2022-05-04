import { useState, useCallback } from 'react'

type FetchResponse = {
  data: any
  error: null | Error
  isPending: boolean
  executeFetch: (options: RequestInit | undefined) => Promise<any>
}

export default function useFetch(url: string): FetchResponse {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState(null)

  const executeFetch = useCallback(
    async (options: RequestInit | undefined) => {
      setIsPending(true)
      setError(null)
      return await fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          setData(response)
          return response
        })
        .catch((err) => {
          setError(err.message)
          return err
        })
        .finally(() => setIsPending(false))
    },
    [url, setIsPending, setError]
  )
  return { data, error, isPending, executeFetch }
}
