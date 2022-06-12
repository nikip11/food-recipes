import { ColumnType } from "../types"

// Sort
type Props<T> = {
  columns: ColumnType<T>[]
}

export default function TableHeader<T>(props: Props<T>): JSX.Element {
  const { columns } = props
  return (
    <thead>
      <tr>
        {columns && columns.map(({ label, width = 100, align = 'left' }, index: number) => (
          <th className="p-2" key={index}
            // width={width} 
            align={align}>{label}</th>
        ))}
      </tr>
    </thead>
  )
}