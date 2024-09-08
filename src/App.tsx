import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { Networks } from './pages/networks'

import { PrivateRoutes } from './routes/privateRoutes'
import { Error } from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <PrivateRoutes><Admin/></PrivateRoutes>
  },
  {
    path: '/admin/social',
    element: <PrivateRoutes><Networks/></PrivateRoutes>
  },
  {
    path: "*",
    element: <Error />
  }
])

export { router };