import React from 'react'
import { Rotate } from './styles'

const Loading = () => {
  return (
    <Rotate>
      &lt; <span role="img" aria-label="Loading"> ⌛ </span> &gt;
    </Rotate>
  )
}

export default Loading
