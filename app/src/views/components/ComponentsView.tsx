import { Link } from "react-router-dom"

const menuComponents = [
  {
    path: "/components/loading",
    name: "loading"
  },
  {
    path: "/components/table",
    name: "table"
  },
  {
    path: "/components/buttons",
    name: "buttons"
  },
  {
    path: "/components/form-fields",
    name: "formfields"
  }
]

export default function ComponentsView() {
  return (
    <div className="container max-w-md mx-auto py-5">
      <h1>Components</h1>
      <ul>
        {menuComponents.map((item) => (<li><Link to={item.path} className="text-blue-600 underline underline-offset-4">{item.name}</Link></li>))}
      </ul>
    </div>
  )
}