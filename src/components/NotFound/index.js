import 'react-loader-spinner/dist/loader/ThreeDots'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundPageContainer,
  SidebarVideosContainer,
  NotFoundContainer,
  FailureContainer,
  FailedImage,
  FailedHeading,
  FailedDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value

      const renderNotFound = () => (
        <FailureContainer dark={darkTheme}>
          <FailedImage
            src={
              darkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <FailedHeading dark={darkTheme}>Page Not Found</FailedHeading>
          <FailedDescription>
            we are sorry, the page you requested could not be found.
          </FailedDescription>
        </FailureContainer>
      )

      return (
        <NotFoundPageContainer>
          <Header />
          <SidebarVideosContainer>
            <Sidebar />
            <NotFoundContainer dark={darkTheme} data-testid="home">
              {renderNotFound()}
            </NotFoundContainer>
          </SidebarVideosContainer>
        </NotFoundPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
