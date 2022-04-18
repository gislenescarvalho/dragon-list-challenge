import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import { FaDragon } from 'react-icons/fa'
import { SignButtons, Button, Logo, Login, InputText, ErrorMessage } from './styles'

const Login = props => {
  const { isLoggedIn, error } = props
  const credentials = { username: '', password: '' }

  const [formData, setFormData] = useState(credentials)
  const [isSignUp, setIsSignUp] = useState(false)

  useEffect(() => {
    if (isLoggedIn) {
      props.history.push('/list')
    }
  }, [isLoggedIn])

  const changeHandler = event => {
    const { id, value } = event.target
    setFormData({ ...formData, [id]: value })
  }

  const submitHandler = event => {
    props.onLogin(formData)
    event.preventDefault()
  }

  const signUpHandler = () => {
    setIsSignUp(true)
  }

  const renderAllButtons = () => {
    return (
      <SignButtons>
        <Button type="submit">Sign in</Button>
        <Button type="button" onClick={signUpHandler}> Sign up </Button>
      </SignButtons>
    )
  }

  const renderSignUpButton = () => {
    return (
      <SignButtons>
        <Button type="submit">Sign up</Button>
      </SignButtons>
    )
  }

  const renderButton = () => {
    return !isSignUp ? renderAllButtons() : renderSignUpButton()
  }

  return (
    <div>
      <Logo>
        <FaDragon size={96} />
      </Logo>
      <Login onSubmit={submitHandler}>
        <InputText
          placeholder="Username"
          id="username"
          type="text"
          onChange={changeHandler}
          value={formData.username}
        />
        <InputText
          placeholder="Password"
          id="password"
          type="password"
          onChange={changeHandler}
          value={formData.password}
        />
        {renderButton()}
      </Login>
      <div>{error && <ErrorMessage>{error}</ErrorMessage>}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: formData => dispatch(actions.login(formData))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
