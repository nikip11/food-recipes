import { RouteObject } from "react-router-dom";
import ComponentsLayout from '@/components/ComponentsLayout'
import Loading from "@/components/ui/Loading";
import Table from "@/components/ui/Table/Table";
import ComponentsView from "@/views/components/ComponentsView";
import FormView from "@/views/components/FormView";

export const ComponentsRoutes: RouteObject =
{
  path: '/components',
  element: <ComponentsLayout />,
  children: [
    { index: true, element: <ComponentsView /> },
    {
      path: 'loading',
      element: <Loading />,
    },
    {
      path: 'table',
      element: <Table columns={[]} data={[]} />,
    },
    {
      path: 'form-fields',
      element: <FormView />,
    }
  ]
}