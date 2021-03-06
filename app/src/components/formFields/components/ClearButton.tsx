import { CloseIcon } from "@/components/Icons";

export default function ClearButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute inset-y-0 right-0 top-2 pr-7" onClick={onClick}>
      <CloseIcon />
    </div>
  )
}