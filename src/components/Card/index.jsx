import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'

const Card = memo((props) => {
  const { data } = props

  return (
    <CardWrapper className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <style title={data.id}>{data.css}</style>
      {parse(data.html)}
    </CardWrapper>
  )
})

Card.propTypes = {
  data: PropTypes.object,
}

export default Card
const CardWrapper = styled.div`
  height: 400px;
  overflow: hidden;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212121;
`
