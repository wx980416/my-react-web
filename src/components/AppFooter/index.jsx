import React, { memo } from 'react'
import styled from 'styled-components'

const AppFooter = memo(() => {
  return <AppFooterWrapper>AppFooter</AppFooterWrapper>
})

export default AppFooter

const AppFooterWrapper = styled.div`
  height: 100px;
  background-color: black;
`
