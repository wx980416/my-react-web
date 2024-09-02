import { memo } from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'
import styled from 'styled-components'

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

const App = memo(() => {
  return (
    <AppWrapper>
      <AppHeader />
      <div className='page'>{useRoutes(routes)}</div>
      <AppFooter />
    </AppWrapper>
  )
})

export default App

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  .page {
    flex: 1;
  }
`
