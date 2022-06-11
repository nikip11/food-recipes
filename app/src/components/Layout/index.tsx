import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <div className="bg-yellow-500 min-w-screen min-h-screen">
      <Header />
      <div className="container sm:w-4/5 w-full mx-auto border border-slate-200 p-5 bg-white sm:rounded-lg">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
