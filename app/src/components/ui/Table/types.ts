import { ReactNode } from "react"

export type ColumnType<T> = {
  label: string
  width?: number
  align?: 'left' | 'right' | 'center'
  accesor: keyof T | ((item: T) => string | ReactNode)
}
