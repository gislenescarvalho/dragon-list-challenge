import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders dark mode text description', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )

  expect(getByText(/Mode/i)).toBeInTheDocument()
})
