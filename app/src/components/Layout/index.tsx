import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="bg-yellow-500 min-w-screen min-h-screen">
      <div className="container max-w-full mx-auto p-5">
        <Outlet />
      </div>
    </div>
  )
}
