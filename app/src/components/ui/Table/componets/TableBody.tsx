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
          {columns.map(({ accesor }, i) => (
            <td key={i} className="p-2">
              {typeof accesor == 'string' ? item[accesor] : accesor(item)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}