import React, { Suspense } from 'react' // Suspense 解决路由懒加载问题
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'
import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback='loading'>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>,
)
