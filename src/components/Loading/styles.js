import styled, { keyframes } from 'styled-components'

export const SpinnerContainer = styled.div`
  & svg {
    transform: rotate(-90deg);
    width: 60px;
    height: 60px;
    & circle {
      stroke-linecap: round;
      stroke-dasharray: 360;
      stroke-width: 6;
      stroke: blue;
      fill: transparent;
      animation: spin 0.6s ease-in-out 0s normal infinite;
    }
  }
`

export const Spin = keyframes`
    from {
        stroke-dashoffset: 360;
    }
    to {
        stroke-dashoffset: 40;
    }
`