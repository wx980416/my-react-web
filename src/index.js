import React, { Suspense } from 'react' // Suspense 解决路由懒加载问题
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import './style/index.css'
import theme from './style/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback='loading'>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Suspense>,
)
