import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/ThreeDots'

import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingItem from '../GamingItem'

import {
  GamingPageContainer,
  SidebarVideosContainer,
  VideosPageContainer,
  LoaderContainer,
  FailureContainer,
  FailedImage,
  FailedHeading,
  FailedDescription,
  RetryButton,
  VideosListContainer,
  GamingTitleLogoContainer,
  GamingLogoContainer,
  GamingTitle,
} from './styledComponents'

const status = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failed: 'FAILED',
}

class Gaming extends Component {
  state = {
    videosList: [],
    pageStatus: status.loading,
  }

  componentDidMount() {
    this.loadData()
  }

  onSuccessfulFetching = videos => {
    const camelCaseData = videos.map(video => ({
      id: video.id,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      viewCount: video.view_count,
    }))
    this.setState({
      pageStatus: status.success,
      videosList: camelCaseData,
    })
  }

  loadData = async () => {
    this.setState({pageStatus: status.loading})
    const gamingVideosApiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }

    const response = await fetch(gamingVideosApiUrl, options)
    const data = await response.json()
    if (response.status === 200) {
      const {videos} = data
      this.onSuccessfulFetching(videos)
    } else {
      this.setState({pageStatus: status.failed})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetryButton = () => {
    this.loadData()
  }

  renderFailureView = dark => (
    <FailureContainer dark={dark}>
      <FailedImage
        src={
          dark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailedHeading dark={dark}>Oops! Something Went Wrong</FailedHeading>
      <FailedDescription>
        We are having some trouble to complete your request. Please try again
      </FailedDescription>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderVideosList = dark => {
    const {videosList} = this.state
    return (
      <>
        <GamingTitleLogoContainer dark={dark} data-testid="banner">
          <GamingLogoContainer dark={dark}>
            <SiYoutubegaming size="30" color="#FF031C" />
          </GamingLogoContainer>
          <GamingTitle dark={dark}>Gaming</GamingTitle>
        </GamingTitleLogoContainer>
        <VideosListContainer>
          {videosList.map(video => (
            <GamingItem videoDetails={video} key={video.id} />
          ))}
        </VideosListContainer>
      </>
    )
  }

  renderVideos = dark => {
    const {pageStatus} = this.state
    switch (pageStatus) {
      case status.loading:
        return this.renderLoader()
      case status.failed:
        return this.renderFailureView(dark)
      case status.success:
        return this.renderVideosList(dark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <GamingPageContainer dark={darkTheme} data-testid="gaming">
              <Header />
              <SidebarVideosContainer>
                <Sidebar />
                <VideosPageContainer>
                  {this.renderVideos(darkTheme)}
                </VideosPageContainer>
              </SidebarVideosContainer>
            </GamingPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
