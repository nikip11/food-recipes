import { useRoutes, RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { ComponentsRoutes } from './componentsRoutes'

const Layout = lazy(() => import('@/components/Layout'))
const Home = lazy(() => import('@/views/HomeView'))
const NotFound = lazy(() => import('@/views/NotFoundView'))

const FoodsView = lazy(() => import('@/views/foods/FoodsView'))
const RecipesView = lazy(() => import('@/views/recipes/RecipesView'))

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
        {
          path: '/recipes',
          element: <RecipesView />,
        },
      ]
    },
    { ...ComponentsRoutes },
    { path: '*', element: <NotFound /> }
  ]
  return useRoutes(routes)
}

export default Routes