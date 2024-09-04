import PropTypes from 'prop-types'
import React, { memo, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Card = memo((props) => {
  const { data } = props
  const containerRef = useRef()
  useEffect(() => {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(data.css)
    const container = containerRef.current
    // 防止反复插入样式
    if (!container.shadowRoot) {
      const shadow = container.attachShadow({ mode: 'open' })
      shadow.adoptedStyleSheets = [sheet]
      shadow.innerHTML = data.html
    }
  }, [data])

  return (
    <CardWrapper className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <div ref={containerRef}></div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212121;
`
