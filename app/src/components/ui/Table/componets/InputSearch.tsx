import { ChangeEvent } from "react"

type Props = {
  search: string
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function InputSearch(props: Props) {
  const { search, handleSearch } = props
  return (
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={handleSearch}
      className="my-3 border-collapse border rounded-md px-4 py-1 flex justify-end w-full"
    />
  )
}