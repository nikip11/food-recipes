type Props = {
  children: React.ReactNode | React.ReactNode[]
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
  onClick?: () => void;
}
export default function MiniButton(props: Props): JSX.Element {
  const { children, type = 'button', disabled = false, onClick } = props;

  return (
    <button
      className="
        p-1
        text-xs
        hover:text-gray-400
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}