import React, { memo } from 'react'
import styled from 'styled-components'

import Test from '../../components/UI/test'

const Home = memo(() => {
  return (
    <HomeWrapper>
      {Array.from({ length: 10 }, (_, i) => {
        return (
          <div key={i} className='w-[200px] h-[200px]'>
            <Test></Test>
          </div>
        )
      })}
    </HomeWrapper>
  )
})

export default Home

const HomeWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`
