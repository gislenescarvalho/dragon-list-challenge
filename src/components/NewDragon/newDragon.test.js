import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import NewDragon from './index'
import { Provider } from 'react-redux'
import { store } from '../../store/index'

describe(':: New dragon ', () => {
  const produceComponent = () =>
    render(
      <Provider store={store}>
        <NewDragon />
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
