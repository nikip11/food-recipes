import { ColumnType } from "../types"

type Props<T> = {
  columns: ColumnType<T>[],
  items: T[]
}

export default function TableBody<T>(props: Props<T>) {
  const { columns, items } = props
  return (
    <tbody>
      {items.map((item: T, index: number) => (
        <tr key={index} className="odd:bg-gray-100">
          {columns.map((column, i) => (
            <td key={i} className="p-2">
              {typeof column.accesor === 'function' && column.accesor(item)}
              {typeof column.accesor === 'string' || typeof column.accesor === 'number' && <>{item[column.accesor]}</>}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}