import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import Login from './index'
import { Provider } from 'react-redux'
import { store } from '../../store/index'

describe(':: Login', () => {
  const produceComponent = () =>
    render(
      <Provider store={store}>
        <Login />
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
