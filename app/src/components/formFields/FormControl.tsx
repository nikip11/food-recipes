import React from "react";

type Props = {
  children?: React.ReactNode | React.ReactNode[]
}

export default function FormControl(props: Props): JSX.Element {
  const { children } = props;
  return (
    <div className="py-3 pt-0">
      {children}
    </div>
  )
}
