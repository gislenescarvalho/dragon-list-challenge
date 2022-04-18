import React from 'react'
import { SpinnerContainer } from './styles'

const Loading = () => {
  return (
    <SpinnerContainer>
      <svg className="spinner" role="alert" aria-live="assertive">
        <circle cx="30" cy="30" r="20" className="circle" />
      </svg>
    </SpinnerContainer>
  )
}

export default Loading
