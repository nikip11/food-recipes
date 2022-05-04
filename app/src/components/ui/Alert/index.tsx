// import Modal from "./components/Modal"

// export { Alert, useModal }
type AlertType = "default" | "error" | "info" | "success" | "warning";
type AlertProps = {
  message: string
  type: AlertType
  action?: () => void
  closeAction?: () => void
  isOpen: boolean
}

export default function Alert(props: AlertProps) {
  const { message, type, action, closeAction, isOpen } = props

  return (
    <>
      {isOpen && (
        <div className="fixed bg-black/50 w-screen h-screen top-0 left-0 flex justify-center items-center">
          <div>
            <div id="header">
              icono
              <h1>Títular</h1>
            </div>
            <div id="body">
              {message}
            </div>
            <div id="footer"></div>
          </div>
        </div>
      )}
    </>
  )
}
