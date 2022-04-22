import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'

import {LinkContainer, LinkName, MenuLink} from './styledComponents'

const links = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const LinksMenu = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value

      const getActiveLinkId = pathname => {
        let activeLinkId = ''
        if (pathname === '/') {
          activeLinkId = 'HOME'
        } else if (pathname === '/trending') {
          activeLinkId = 'TRENDING'
        } else if (pathname === '/gaming') {
          activeLinkId = 'GAMING'
        } else if (pathname === '/saved-videos') {
          activeLinkId = 'SAVEDVIDEOS'
        }
        return activeLinkId
      }

      const {location} = props
      const {pathname} = location
      const activeLinkId = getActiveLinkId(pathname)

      const getBackgroundColor = active => {
        let textColor = ''
        if (active && darkTheme) {
          textColor = '#383838'
        } else if (!active && darkTheme) {
          textColor = 'transparent'
        } else if (active && !darkTheme) {
          textColor = '#F1F5F9'
        } else {
          textColor = 'transparent'
        }
        return textColor
      }

      const getTextColor = active => {
        let textColor = ''
        if (active && darkTheme) {
          textColor = '#ffffff'
        } else if (!active && darkTheme) {
          textColor = '#C4C5C6'
        } else if (active && !darkTheme) {
          textColor = '#1D2A3B'
        } else {
          textColor = '#7B838C'
        }
        return textColor
      }

      const getIconColor = active => (active ? '#ff0000' : '#606060')

      const renderHomeLink = () => {
        const active = activeLinkId === links.home
        const bgColor = getBackgroundColor(active)
        const iconColor = getIconColor(active)
        const textColor = getTextColor(active)
        return (
          <LinkContainer bgColor={bgColor}>
            <MenuLink to="/">
              <AiFillHome size="16" color={iconColor} />
              <LinkName color={textColor}>Home</LinkName>
            </MenuLink>
          </LinkContainer>
        )
      }

      const renderTrendingLink = () => {
        const active = activeLinkId === links.trending
        const bgColor = getBackgroundColor(active)
        const iconColor = getIconColor(active)
        const textColor = getTextColor(active)
        return (
          <LinkContainer bgColor={bgColor}>
            <MenuLink to="/trending">
              <MdWhatshot size="16" color={iconColor} />
              <LinkName color={textColor}>Trending</LinkName>
            </MenuLink>
          </LinkContainer>
        )
      }

      const renderGamingLink = () => {
        const active = activeLinkId === links.gaming
        const bgColor = getBackgroundColor(active)
        const iconColor = getIconColor(active)
        const textColor = getTextColor(active)
        return (
          <LinkContainer bgColor={bgColor}>
            <MenuLink to="/gaming">
              <SiYoutubegaming size="16" color={iconColor} />
              <LinkName color={textColor}>Gaming</LinkName>
            </MenuLink>
          </LinkContainer>
        )
      }

      const renderSavedVideosLink = () => {
        const active = activeLinkId === links.savedVideos
        const bgColor = getBackgroundColor(active)
        const iconColor = getIconColor(active)
        const textColor = getTextColor(active)
        return (
          <LinkContainer bgColor={bgColor}>
            <MenuLink to="/saved-videos">
              <MdPlaylistAdd size="20" color={iconColor} />
              <LinkName color={textColor}>Saved videos</LinkName>
            </MenuLink>
          </LinkContainer>
        )
      }

      return (
        <>
          {renderHomeLink()}
          {renderTrendingLink()}
          {renderGamingLink()}
          {renderSavedVideosLink()}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(LinksMenu)
