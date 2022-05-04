import { Link } from "react-router-dom"

type MenuItem = {
  label: string
  path: string
  icon?: string
}

const menuitems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Foods',
    path: '/foods',
  },
  {
    label: 'Recipes',
    path: '/recipes',
  },
]

export default function Header() {
  return (
    <div className="">
      <ul className="flex w-full justify-center items-center p-5">
        {menuitems.map((item) => (<li key={item.label}><Link to={item.path} className="mx-3 hover:bg-slate-100 py-2 px-3 rounded-full transition ease-in-out">{item.label}</Link></li>))}
      </ul>
    </div>
  )
}