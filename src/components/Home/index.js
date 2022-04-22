import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/ThreeDots'

import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import HomeVideoItem from '../HomeVideoItem'
import ThemeContext from '../../context/ThemeContext'

import {
  HomePageContainer,
  SidebarAndVideosContainer,
  VideosPageContainer,
  VideosAndSearchContainer,
  SearchBarContainer,
  SearchInputContainer,
  SearchButton,
  VideosContainer,
  FailureNotFoundContainer,
  FailedNotFoundImage,
  FailedNotFoundHeading,
  FailedNotFoundDescription,
  RetryButton,
  VideosListContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  noVideos: 'NOVIDEOS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      if (data.total === 0) {
        this.setState({apiStatus: apiStatusConstants.noVideos})
      } else {
        const updatedData = data.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          publishedAt: eachVideo.published_at,
          viewCount: eachVideo.view_count,
          channel: {
            name: eachVideo.channel.name,
            profileImageUrl: eachVideo.channel.profile_image_url,
          },
        }))
        this.setState({
          apiStatus: apiStatusConstants.success,
          videosList: updatedData,
        })
      }
    }
  }

  onClickSearchButton = () => {
    this.loadData()
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickCloseButton = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  onClickRetryButton = () => {
    this.loadData()
  }

  renderLoadingView = dark => {
    const loaderColor = dark ? '#ffffff' : '#3b82f6'
    return (
      <VideosContainer data-testid="loader">
        <Loader type="ThreeDots" color={loaderColor} height="50" width="50" />
      </VideosContainer>
    )
  }

  renderNoVideosView = dark => (
    <FailureNotFoundContainer dark={dark}>
      <FailedNotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailedNotFoundHeading dark={dark}>
        No Search results found
      </FailedNotFoundHeading>
      <FailedNotFoundDescription>
        Try different key words or remove search filter
      </FailedNotFoundDescription>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureNotFoundContainer>
  )

  renderFailureView = dark => (
    <FailureNotFoundContainer dark={dark}>
      <FailedNotFoundImage
        src={
          dark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailedNotFoundHeading dark={dark}>
        Oops! Something Went Wrong
      </FailedNotFoundHeading>
      <FailedNotFoundDescription>
        We are having some trouble to complete your request. Please try again
      </FailedNotFoundDescription>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureNotFoundContainer>
  )

  renderVideosList = () => {
    const {videosList} = this.state
    return (
      <VideosListContainer>
        {videosList.map(video => (
          <HomeVideoItem videoDetails={video} key={video.id} />
        ))}
      </VideosListContainer>
    )
  }

  renderVideos = dark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderFailureView(dark)
      case apiStatusConstants.loading:
        return this.renderLoadingView(dark)
      case apiStatusConstants.noVideos:
        return this.renderNoVideosView(dark)
      default:
        return null
    }
  }

  renderSearchBar = dark => {
    const {searchInput} = this.state
    return (
      <SearchBarContainer>
        <SearchInputContainer
          type="search"
          value={searchInput}
          onChange={this.onChangeSearch}
          placeholder="Search"
          dark={dark}
        />
        <SearchButton
          type="button"
          onClick={this.onClickSearchButton}
          dark={dark}
          data-testid="searchButton"
        >
          <AiOutlineSearch color={dark ? '#565554' : '#777777'} />
        </SearchButton>
      </SearchBarContainer>
    )
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <HomePageContainer dark={darkTheme} data-testid="home">
              <Header />
              <SidebarAndVideosContainer>
                <Sidebar />
                <VideosPageContainer dark={darkTheme}>
                  {showBanner && (
                    <Banner onClickCloseButton={this.onClickCloseButton} />
                  )}
                  <VideosAndSearchContainer>
                    {this.renderSearchBar(darkTheme)}
                    {this.renderVideos(darkTheme)}
                  </VideosAndSearchContainer>
                </VideosPageContainer>
              </SidebarAndVideosContainer>
            </HomePageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
