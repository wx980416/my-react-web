import React, { memo } from 'react'
import styled from 'styled-components'

import Card from '@/components/Card'
import data from './data.json'

const Home = memo(() => {
  return (
    <HomeWrapper className='w-full h-full'>
      {data.map((item) => {
        return <Card key={item.id} data={item} />
      })}
    </HomeWrapper>
  )
})

export default Home

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
