import * as actionTypes from './actionTypes'
import * as actions from './index'

export const initLogin = () => {
  return {
    type: actionTypes.LOGIN_INIT
  }
}

export const loginFail = () => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: 'Username and password must to have at least 4 characters!'
  }
}

export const login = credentials => {
  return dispatch => {
    if (credentials.username.length > 3 && credentials.password.length > 3) {
      dispatch(initLogin())
      dispatch(actions.getDragonsList())
    } else {
      dispatch(loginFail())
    }
  }
}
