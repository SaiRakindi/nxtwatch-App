import {Component} from 'react'

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  AppContainer,
  LoginFormContainer,
  LoginForm,
  InputLabel,
  InputContainer,
  Input,
  Logo,
  CheckBox,
  CheckBoxContainer,
  CheckBoxLabel,
  LoginButton,
  ErrorMsgDescription,
} from './styledComponents'

const darkThemeImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const lightThemeImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <InputContainer>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </InputContainer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state

    const inputType = showPassword ? 'text' : 'password'

    return (
      <InputContainer>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <Input
          type={inputType}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </InputContainer>
    )
  }

  renderCheckBoxField = () => (
    <CheckBoxContainer>
      <CheckBox
        id="showPassword"
        type="checkbox"
        onChange={this.onToggleShowPassword}
      />
      <CheckBoxLabel htmlFor="showPassword">Show Password</CheckBoxLabel>
    </CheckBoxContainer>
  )

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.get('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <AppContainer dark={darkTheme}>
              <LoginFormContainer dark={darkTheme}>
                <Logo
                  src={darkTheme ? darkThemeImage : lightThemeImage}
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onSubmitLoginForm}>
                  {this.renderUsernameField()}
                  {this.renderPasswordField()}
                  {this.renderCheckBoxField()}
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && (
                    <ErrorMsgDescription>*{errorMsg}</ErrorMsgDescription>
                  )}
                </LoginForm>
              </LoginFormContainer>
            </AppContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
