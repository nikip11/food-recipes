import { Suspense } from 'react'
import Routes from '@/routes'
import { BrowserRouter } from 'react-router-dom'
import Loading from '@/components/ui/Loading'
import './App.css'

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </>
  )
}
