import React, { memo } from 'react'
import styled from 'styled-components'

import logo from '@/assets/img/logo.jpg'

const AppHeader = memo(() => {
  return (
    <AppHeaderWrapper>
      <img className='w-[40px] h-[40px] rounded' src={logo} alt='' />
      <div className='pl-4'>努力挣钱的小鑫的原生 UI 组件库</div>
    </AppHeaderWrapper>
  )
})

export default AppHeader

const AppHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
`
