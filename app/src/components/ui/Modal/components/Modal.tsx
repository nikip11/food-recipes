import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import { ModalButton } from "../types";

type ModalProps = {
  title?: string;
  isOpen: boolean;
  children: React.ReactNode;
  closeModal?: () => void;
  buttons?: ModalButton[];
}

export default function Modal(props: ModalProps) {
  const { title = '', isOpen, closeModal, children, buttons = [] } = props
  return (
    <>
      {isOpen && (
        <div className="fixed bg-black/50 w-screen h-screen top-0 left-0 flex justify-center items-center overflow-hidden">
          <div className="rounded-md bg-white w-full p-4 max-h-screen overflow-y-scroll">
            <ModalHeader title={title} closeButton={true} onClose={closeModal} />
            <div className="py-2 overflow-scroll max-full">
              {children}
            </div>
            {buttons.length > 0 && (<ModalFooter buttons={buttons} />)}
          </div>
        </div>
      )}
    </>
  )
}

