import AlertHeader from "./AlertHeader";
import AlertFooter from "./AlertFooter";
import { AlertButton } from "../types";

type AlertProps = {
  title?: string;
  isOpen: boolean;
  children: React.ReactNode;
  closeAlert?: () => void;
  buttons?: AlertButton[];
}

export default function Alert(props: AlertProps) {
  const { title = '', isOpen, closeAlert, children, buttons = [] } = props
  return (
    <>
      {isOpen && (
        <div className="fixed bg-black/50 w-screen h-screen top-0 left-0 flex justify-center items-center">
          <div className="rounded-md bg-white w-3/5 p-4">
            <AlertHeader title={title} closeButton={true} onClose={closeAlert} />
            <div className="py-2 overflow-scroll max-full">
              {children}
            </div>
            {buttons.length > 0 && (<AlertFooter buttons={buttons} />)}
          </div>
        </div>
      )}
    </>
  )
}

