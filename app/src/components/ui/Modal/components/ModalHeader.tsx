import { CloseIcon } from "@/components/Icons"

type HeaderProps = {
  title: string,
  closeButton?: boolean,
  onClose?: () => void,
}
export default function ModalHeader(props: HeaderProps) {
  const { title, closeButton, onClose } = props
  return (
    <div className="flex justify-between items-center pb-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      {closeButton && (
        <button className="" onClick={onClose}>
          <CloseIcon />
        </button>
      )}
    </div>
  )
}