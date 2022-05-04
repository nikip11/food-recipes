type Props = {
  children: React.ReactNode | React.ReactNode[]
  style?: 'primary' | 'secondary' | 'icon';
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
  onClick?: () => void;
}
export default function Button(props: Props): JSX.Element {
  const { children, style = 'primary', type = 'button', disabled = false, onClick } = props;

  return (
    <button
      className={style === 'primary'
        ? "py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        : style === 'secondary'
          ? "py-2 px-4 bg-red-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          : "p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 mx-1"}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}