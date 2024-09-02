import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import "normalize.css"
import './styles/index.css'
import theme from './styles/theme'

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
