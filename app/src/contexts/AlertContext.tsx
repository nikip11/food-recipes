import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export enum AlertType {
  DEFAULT = 'default',
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning'
}

interface AlertProps {
  message: string
  type: AlertType
  action?: () => void
  closeAction?: () => void
}

// interface Alert extends AlertProps {
//   open: boolean
// }

// const AlertContext = createContext((_alert: AlertProps) => {
//   // console.log(alert)
// })

// export function AlertContextProvider({ children }: { children: ReactNode }): JSX.Element {

//   return (
//     <AlertContext.Provider value={addAlert}>
//       {children}
//       <AlertDialog />
//     </AlertContext.Provider>
//   )
// }

// export function useAlertContext(): any {
//   return useContext(AlertContext)
// }