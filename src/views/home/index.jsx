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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  padding: 0 20px;
`
