import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import Dragon from './index'
import { Provider } from 'react-redux'
import { store } from '../../store/index'

describe(':: Dragon - Actions', () => {
  const produceComponent = () =>
    render(
      <Provider store={store}>
        <Dragon />
      </Provider>
    )

  afterEach(() => {
    cleanup()
  })

  it('should render without errors', () => {
    produceComponent()
    expect(screen).toBeTruthy()
  })
})
