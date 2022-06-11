import { UserIcon } from "@/components/Icons";

type Props = {
  portions: number
}
export default function Portions(props: Props) {
  const { portions } = props
  return (
    <div className="relative w-7 h-7">
      <UserIcon />
      <div className="absolute top-0 left-5 text-red-900 text-lg">{portions}</div>
    </div>
  )
}