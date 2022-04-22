import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/ThreeDots'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  VideoDetailsPageContainer,
  SidebarVideosContainer,
  VideoContainer,
  VideoDetailsContainer,
  LoaderContainer,
  FailureContainer,
  FailedImage,
  FailedHeading,
  FailedDescription,
  RetryButton,
  VideoDetailsTitle,
  ViewsCountStatButtonsContainer,
  ViewsCountDuration,
  ButtonsContainer,
  StatButton,
  HRLine,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelNameSubscribersContainer,
  ChannelName,
  Subscribers,
  VideoDescription,
} from './styledComponents'

const status = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failed: 'FAILED',
}

const getFormattedDate = date => {
  const duration = formatDistanceToNow(new Date(date)).split(' ')
  return `${duration[duration.length - 2]} ${duration[duration.length - 1]} ago`
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    pageStatus: status.loading,
  }

  componentDidMount() {
    this.loadData()
  }

  onSuccessfulFetching = videoDetails => {
    const camelCaseData = {
      channel: {
        name: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
      },
      description: videoDetails.description,
      id: videoDetails.id,
      publishedAt: videoDetails.published_at,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }
    this.setState({videoDetails: camelCaseData, pageStatus: status.success})
  }

  loadData = async () => {
    this.setState({pageStatus: status.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }

    const response = await fetch(videoDetailsApiUrl, options)
    const data = await response.json()
    if (response.status === 200) {
      this.onSuccessfulFetching(data.video_details)
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
        We are having some trouble to complete your request. Please try again.
      </FailedDescription>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderVideoDetails = () => {
    const {videoDetails} = this.state
    const {
      id,
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            darkTheme,
            savedVideos,
            likedVideosIds,
            dislikedVideosIds,
            onClickLikeButton,
            onClickDislikeButton,
            onClickSaveButton,
          } = value
          const liked = likedVideosIds.includes(id)
          const disliked = dislikedVideosIds.includes(id)
          const saved =
            savedVideos.find(savedVideo => savedVideo.id === id) !== undefined

          const whenOnClickLikeButton = () => onClickLikeButton(id)
          const whenOnClickDislikeButton = () => onClickDislikeButton(id)
          const whenOnClickSaveButton = () => onClickSaveButton(videoDetails)

          return (
            <>
              <ReactPlayer url={videoUrl} width="100%" />
              <VideoDetailsContainer>
                <VideoDetailsTitle dark={darkTheme}>{title}</VideoDetailsTitle>
                <ViewsCountStatButtonsContainer>
                  <ViewsCountDuration>
                    {viewCount} views . {getFormattedDate(publishedAt)}
                  </ViewsCountDuration>
                  <ButtonsContainer>
                    <StatButton
                      color={liked ? '#2563eb' : '#64748b '}
                      onClick={whenOnClickLikeButton}
                    >
                      <BiLike />
                      Like
                    </StatButton>
                    <StatButton
                      color={disliked ? '#2563eb' : '#64748b '}
                      onClick={whenOnClickDislikeButton}
                    >
                      <BiDislike />
                      Dislike
                    </StatButton>
                    <StatButton
                      color={saved ? '#2563eb' : '#64748b '}
                      onClick={whenOnClickSaveButton}
                    >
                      <MdPlaylistAdd />
                      {saved ? 'Saved' : 'Save'}
                    </StatButton>
                  </ButtonsContainer>
                </ViewsCountStatButtonsContainer>
                <HRLine dark={darkTheme} />
                <ChannelDetailsContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <ChannelNameSubscribersContainer>
                    <ChannelName dark={darkTheme}>{name}</ChannelName>
                    <Subscribers>{subscriberCount} subscribers</Subscribers>
                  </ChannelNameSubscribersContainer>
                </ChannelDetailsContainer>
                <VideoDescription dark={darkTheme}>
                  {description}
                </VideoDescription>
              </VideoDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderPage = dark => {
    const {pageStatus} = this.state
    if (pageStatus === status.loading) {
      return this.renderLoader()
    }
    if (pageStatus === status.failed) {
      return this.renderFailureView(dark)
    }
    return this.renderVideoDetails()
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <VideoDetailsPageContainer
              dark={darkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <SidebarVideosContainer>
                <Sidebar />
                <VideoContainer dark={darkTheme} data-testid="home">
                  {this.renderPage()}
                </VideoContainer>
              </SidebarVideosContainer>
            </VideoDetailsPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
