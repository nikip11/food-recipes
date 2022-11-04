export type ButtonProps = {
  children: React.ReactNode | React.ReactNode[]
  style?: 'primary' | 'secondary' | 'icon';
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export default function Button(props: ButtonProps): JSX.Element {
  const { children, style = 'primary', type = 'button', disabled = false, onClick } = props
  const styleClass = style === 'primary'
    ? 'py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
    : style === 'secondary'
      ? 'py-2 px-4 bg-red-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75'
      : 'p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 mx-1'
  return (
    <button
      className={`${styleClass} disabled:bg-gray-100 disabled:text-gray-300`}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
}