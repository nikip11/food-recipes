import { ModalButton } from "../types";
import Button from "../../Button";

export default function ModalFooter({ buttons }: { buttons: ModalButton[] }) {
  return (
    <div className="mt-3 flex justify-end">
      {buttons.map(({ label, action }) => (
        <Button onClick={() => action}>{label}</Button>
      ))}
    </div>
  )
}