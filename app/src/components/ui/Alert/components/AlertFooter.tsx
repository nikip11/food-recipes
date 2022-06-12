import { AlertButton } from "../types";
import Button from "../../Button";

export default function AlertFooter({ buttons }: { buttons: AlertButton[] }) {
  return (
    <div className="mt-3 flex justify-end">
      {buttons.map(({ label, action }) => (
        <Button onClick={() => action}>{label}</Button>
      ))}
    </div>
  )
}