import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  width: 100%;
  @media (min-width: 768px) {
    padding: 30px 40px;
  }
`

export const LogoContainer = styled.div`
  width: 100%;
`

export const Logo = styled.img`
  width: 120px;
  @media (min-width: 768px) {
    width: 150px;
  }
`
export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 0 20px;
  padding: 0;
`

export const ProfileButton = styled(ThemeButton)`
  width: 40px;
  height: 40px;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 100%;
`

export const LinksButton = styled(ThemeButton)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const LinksPopupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark ? '#212121' : '#FFFFFF')};
`

export const CloseButton = styled(ThemeButton)`
  margin: 40px 30px;
  align-self: flex-end;
`

export const LinksContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`
