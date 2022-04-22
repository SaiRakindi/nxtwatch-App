import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  AppContainer,
  LoginContainer,
  LogoImg,
  LoginForm,
  InputFieldContainer,
  InputLabel,
  InputContainer,
  CheckBoxContainer,
  CheckBox,
  CheckBoxLabel,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
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

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const inputType = showPassword ? 'text' : 'password'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <AppContainer dark={darkTheme}>
              <LoginContainer dark={darkTheme}>
                <LogoImg
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onClickLogin}>
                  <InputFieldContainer>
                    <InputLabel dark={darkTheme} htmlFor="username">
                      USERNAME
                    </InputLabel>
                    <InputContainer
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={usernameInput}
                      onChange={this.onChangeUsernameInput}
                    />
                  </InputFieldContainer>
                  <InputFieldContainer>
                    <InputLabel dark={darkTheme} htmlFor="password">
                      PASSWORD
                    </InputLabel>
                    <InputContainer
                      id="password"
                      type={inputType}
                      placeholder="Password"
                      value={passwordInput}
                      onChange={this.onChangePasswordInput}
                    />
                  </InputFieldContainer>
                  <CheckBoxContainer>
                    <CheckBox
                      id="show-password"
                      type="checkbox"
                      onChange={this.onChangeShowPassword}
                    />
                    <CheckBoxLabel htmlFor="show-password" dark={darkTheme}>
                      Show Password
                    </CheckBoxLabel>
                  </CheckBoxContainer>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </LoginForm>
              </LoginContainer>
            </AppContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
