import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import PageAuth from '@/components/PageAuth/PageAuth'
import { Loading } from '@/components/Loading/Loading'

const NotFond = lazy(() => import('../pages/404/index'))

const modules = import.meta.glob('../pages/**/*.tsx')

const initPages = () => {
  const reg = /.*\/pages/
  return Object.entries(modules).map(([key, fn]) => {
    const path = key.replace(reg, '').replace('.tsx', '').replace('index/index', '').replace('index', '')
    const Element = lazy(fn as any)
    return {
      path,
      element: <Element/>,
    }
  })
}

const pages = initPages()
const router = createBrowserRouter(
//   [
//   {
//     index: true,
//     path: '/',
//     element: <IndexPage/>,
//   },
//   {
//     index: true,
//     path: '/suspense',
//     element: <Suspense fallback={<Loading/>}>
//       <DemoSuspense/>
//     </Suspense>,
//   },
//   {
//     path: '*',
//     element: <NotFond/>,
//   },
// ]
  [
    {
      path: '/',
      element: <PageAuth/>,
      children: [
        ...pages,
      ],
    },
    {
      path: '*',
      element: <NotFond/>,
    },
  ],
  {
    basename: '/app',
  })

function RouteContainer() {
  return <Suspense fallback={<Loading/>}>
        <RouterProvider router={router}></RouterProvider>
    </Suspense>
}

export default RouteContainer
