import styled from 'styled-components'

export default null

export const LogoutContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${props => (props.dark ? '#212121' : '#FFFFFF')};
`
export const LogoutMessage = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.dark ? '#ffffff' : '#39628F')};
  margin: 0 0 20px 0;
`
export const PopupButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 16px 0 0 0;
`
export const PopupButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #2082f2;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 6px;
  font-weight: bold;
`
export const PopupOutlineButton = styled(PopupButton)`
  background-color: transparent;
  border: 1.5px solid #93a4b8;
  color: #93a4b8;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 0 16px;
  @media (min-width: 768px) {
    width: 80px;
    height: 30px;
    border: 2px solid;
    border-color: ${props => (props.dark ? '#ffffff' : '#378ff3')};
    border-radius: 2px;
  }
`
export const LogoutIconContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutText = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#378ff3')};
  margin: 2px 0 5px 0;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  @media (max-width: 767px) {
    display: none;
  }
`
