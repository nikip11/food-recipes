import { ColumnType } from "../Table";

// Sort
type Props = {
  columns: ColumnType<any>[]
}

export default function TableHeader<T>(props: Props): JSX.Element {
  const { columns } = props
  return (
    <thead>
      <tr>
        {columns && columns.map(({ label, width = '100' }, index: number) => (
          <th className="border border-slate-600 p-2" key={index} width={width}>{label}</th>
        ))}
      </tr>
    </thead>
  )
}