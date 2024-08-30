import React from 'react'
import { Navigate } from 'react-router-dom'

// 懒加载
const Home = React.lazy(() => import('@/views/home'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]

export default routes
