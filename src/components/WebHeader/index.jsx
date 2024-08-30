import React, { memo } from 'react'
import logo from '@/assets/img/logo.jpg'
import { Button } from 'antd';

const WebHeader = memo(() => {
  return (
    <div className='w-full h-[70px] flex justify-center items-center'>
      <div className='text-4xl pr-4'>前端工程师-王鑫</div>
      <img className='w-[40px] h-[40px] rounded-full' src={logo} alt='' />
      <Button type="primary">Button</Button>
    </div>
  )
})

export default WebHeader
