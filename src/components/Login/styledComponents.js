import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.dark ? '#212121' : '#f9f9f9')};
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  background-color: ${props => (props.dark ? '#0F0F0F' : '#ffffff')};
  border-radius: 5px;
  box-shadow: ${props => (props.dark ? 'none' : '0px 0px 20px 5px #c6c9cc')};
  width: 100%;
  max-width: 450px;
  @media (max-width: 767px) {
    width: 80%;
  }
`

export const LogoImg = styled.img`
  width: 120px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 150px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const InputFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  background-color: transparent;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #909090;
  margin-bottom: 6px;
  color: ${props => (props.dark ? '#ffffff' : '#94a3b8')};
`

export const InputContainer = styled.input`
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto';
  padding: 10px 16px;
  border-radius: 4px;
  border: 1.5px solid #94a3b8;
  background-color: transparent;
`

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
`

export const CheckBox = styled.input`
  width: 15px;
  height: 20px;
  margin-right: 6px;
`

export const CheckBoxLabel = styled(InputLabel)`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  margin: 0;
`

export const LoginBtn = styled.button`
  width: 100%;
  height: 40px;
  color: #ffffff;
  background-color: #2082f2;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 0 6px 0;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  font-family: 'Roboto';
  align-self: flex-start;
`
