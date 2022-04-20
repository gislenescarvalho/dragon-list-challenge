import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import dragonListReducer from './reducers/dragonList'
import authReducer from './reducers/auth'
import dragonReducer from './reducers/dragon'

const rootReducer = combineReducers({
  dragonList: dragonListReducer,
  auth: authReducer,
  dragon: dragonReducer
})

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
