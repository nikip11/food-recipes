import { ReactNode } from "react"

export type ColumnType<T> = {
  label: string
  width?: string
  accesor: keyof T | ((item: T) => string | ReactNode)
}
