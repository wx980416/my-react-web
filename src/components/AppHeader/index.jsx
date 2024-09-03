import React, { memo } from 'react'
import styled from 'styled-components'

import avatar from '@/assets/img/avatar.jpg'
import logo from '@/assets/img/logo.png'
const title = process.env.REACT_APP_TITLE

const AppHeader = memo(() => {
  return (
    <AppHeaderWrapper>
      <div className='flex-1'>
        <img className='w-[40px] h-[40px] cursor-pointer' src={logo} alt='' />
      </div>
      <div className='flex'>
        <div className='title cursor-pointer'>{title}</div>
      </div>
      <div className='flex-1 flex justify-end'>
        <img className='w-[40px] h-[40px] rounded cursor-pointer' src={avatar} alt='' />
      </div>
    </AppHeaderWrapper>
  )
})

export default AppHeader

const AppHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  background-color: #171717;
  .title {
    font-size: 30px;
    color: #fff;
  }
`
