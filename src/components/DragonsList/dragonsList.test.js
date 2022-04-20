import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import DragonsList from './index'
import { Provider } from 'react-redux'
import { store } from '../../store/index'

describe(':: Dragons List', () => {
  const produceComponent = () =>
    render(
      <Provider store={store}>
        <DragonsList />
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
