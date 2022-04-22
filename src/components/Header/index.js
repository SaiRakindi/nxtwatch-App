import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'
import LogoutButton from '../LogoutButton'
import LinksMenu from '../LinksMenu'

import {
  HeaderContainer,
  LogoContainer,
  Logo,
  HeaderIconsContainer,
  ThemeButton,
  ProfileButton,
  ProfileImage,
  LinksButton,
  LinksPopupContainer,
  CloseButton,
  LinksContainer,
} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, onToggleThemeButton} = value
      const iconColor = darkTheme ? '#fff' : '#000'
      const logoUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const renderPopupMenu = () => (
        <Popup
          modal
          trigger={
            <LinksButton>
              <GiHamburgerMenu size={30} color={iconColor} />
            </LinksButton>
          }
          className="popup-content"
        >
          {close => (
            <LinksPopupContainer dark={darkTheme}>
              <CloseButton onClick={() => close()}>
                <MdClose size={28} color={iconColor} />
              </CloseButton>
              <LinksContainer>
                <LinksMenu />
              </LinksContainer>
            </LinksPopupContainer>
          )}
        </Popup>
      )

      return (
        <HeaderContainer dark={darkTheme}>
          <LogoContainer>
            <Link to="/">
              <Logo src={logoUrl} alt="website logo" />
            </Link>
          </LogoContainer>
          <HeaderIconsContainer>
            <ThemeButton onClick={onToggleThemeButton} data-testid="theme">
              {darkTheme ? (
                <FiSun size={26} color={iconColor} />
              ) : (
                <FaMoon size={26} color={iconColor} />
              )}
            </ThemeButton>
            {renderPopupMenu()}
            <ProfileButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            <LogoutButton />
          </HeaderIconsContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
