import { memo } from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'
import WebHeader from './components/WebHeader'
import WebFooter from './components/WebFooter'

const App = memo(() => {
  return (
    <div className='app bg-[#f2f5f8]'>
      {/* <WebHeader /> */}
      <div className='page'>{useRoutes(routes)}</div>
      {/* <WebFooter /> */}
    </div>
  )
})

export default App
