import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import App from './App'
import 'normalize.css'
import './styles/index.css'
import theme from './styles/theme'
import store from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback='loading'>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>,
)
