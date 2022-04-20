import React, { useState } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './components/Login'
import DragonList from './components/DragonsList'
import Dragon from './components/Dragon'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyles from './styles/globalStyles'

const App = props => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const { isLoggedIn } = props

  const getRoutes = () => {
    return !isLoggedIn ? (
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dragon/:id" render={props => <Dragon {...props} />} />
        <Route path="/list" exact component={DragonList} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="container">
        <GlobalStyles />
        <button
          className="switch-theme"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Dark Mode: {isDarkTheme ? 'On' : 'Off'}
        </button>
        <header className="header">{getRoutes()}</header>
      </div>
    </ThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default withRouter(connect(mapStateToProps, null)(App))
