import 'react-loader-spinner/dist/loader/ThreeDots'

import {MdWhatshot} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'

import {
  SavedVideosPageContainer,
  SidebarVideosContainer,
  VideosPageContainer,
  FailureContainer,
  FailedImage,
  FailedHeading,
  FailedDescription,
  VideosListContainer,
  TrendingTitleLogoContainer,
  TrendingLogoContainer,
  TrendingTitle,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value

      const renderFailureView = () => (
        <FailureContainer dark={darkTheme}>
          <FailedImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <FailedHeading dark={darkTheme}>No saved videos found</FailedHeading>
          <FailedDescription>
            You can save your videos while watching them
          </FailedDescription>
        </FailureContainer>
      )

      const renderVideosList = () => (
        <>
          <TrendingTitleLogoContainer dark={darkTheme} data-testid="banner">
            <TrendingLogoContainer dark={darkTheme}>
              <MdWhatshot size="30" color="#FF031C" />
            </TrendingLogoContainer>
            <TrendingTitle dark={darkTheme}>Saved Videos</TrendingTitle>
          </TrendingTitleLogoContainer>
          <VideosListContainer>
            {savedVideos.map(video => (
              <VideoItem videoDetails={video} key={video.id} />
            ))}
          </VideosListContainer>
        </>
      )

      const renderVideos = () => {
        if (savedVideos.length === 0) {
          return renderFailureView()
        }
        return renderVideosList()
      }

      return (
        <SavedVideosPageContainer dark={darkTheme} data-testid="savedVideos">
          <Header />
          <SidebarVideosContainer>
            <Sidebar />
            <VideosPageContainer dark={darkTheme} data-testid="home">
              {renderVideos()}
            </VideosPageContainer>
          </SidebarVideosContainer>
        </SavedVideosPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
