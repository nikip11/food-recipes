type LabelProps = {
  htmlFor?: string
  children?: React.ReactNode[] | React.ReactNode
}

export default function Label(props: LabelProps): JSX.Element {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="mr-2 px-1 py-3">{children}</label>
  )

}