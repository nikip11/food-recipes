type IconProps = {
  style?: string
}
export function CloseIcon() {
  const style = "cursor-pointer text-yellow-700 transition ease-in-out hover:border-2 hover:rounded-full hover:border-yellow-400 hover:text-yellow-700"
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function TrashIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg >
  )
}

export function EditIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg >
  )
}

export function LeftIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg >
  )
}

export function RightIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg >
  )
}

export function AddIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg >
  )
}

export function Refreshicon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg >
  )
}
export function WarningIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg >
  )
}
export function ErrorIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg >
  )
}
export function InfoIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg >
  )
}

export function CheckIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    </svg >
  )
}

export function BookmarkIcon(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg >
  )
}

export function ArrowDown(props: IconProps) {
  const { style } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${style}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function Spinner(props: IconProps) {
  const { style } = props
  return (
    <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 ${style}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" ></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )
}

export function UserIcon(props: IconProps) {
  const { style = "h-6 w-6" } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}