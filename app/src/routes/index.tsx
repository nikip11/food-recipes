import { useRoutes, RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { ComponentsRoutes } from './componentsRoutes'

const Layout = lazy(() => import('@/components/Layout'))
const Home = lazy(() => import('@/views/HomeView'))
const NotFound = lazy(() => import('@/views/NotFoundView'))

const FoodsView = lazy(() => import('@/views/FoodsView'))

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/foods',
          element: <FoodsView />,
        },
      ]
    },
    { ...ComponentsRoutes },
    { path: '*', element: <NotFound /> }
  ]
  return useRoutes(routes)
}

export default Routes