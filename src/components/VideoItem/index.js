import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemContainer,
  VideoItemLink,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoTitleAndDetailsContainer,
  VideoTitle,
  ChannelNameContainer,
  ChannelDescriptionText,
  Dot,
  Dot1,
  ChannelNameDurationContainer,
  ViewsDurationContainer,
} from './styledComponents'

const getFormattedDate = date => {
  const duration = formatDistanceToNow(new Date(date)).split(' ')
  return `${duration[duration.length - 2]} ${duration[duration.length - 1]} ago`
}

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
  } = videoDetails

  const duration = getFormattedDate(publishedAt)
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <VideoItemLink to={`/videos/${id}`}>
            <VideoItemContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <VideoTitleAndDetailsContainer>
                  <VideoTitle dark={darkTheme}>{title}</VideoTitle>
                  <ChannelNameDurationContainer>
                    <ChannelNameContainer>
                      <ChannelDescriptionText>{name}</ChannelDescriptionText>
                    </ChannelNameContainer>
                    <Dot1>
                      <BsDot />
                    </Dot1>
                    <ViewsDurationContainer>
                      <ChannelDescriptionText>{`${viewCount} views`}</ChannelDescriptionText>
                      <Dot>
                        <BsDot />
                      </Dot>
                      <ChannelDescriptionText>{`${duration}`}</ChannelDescriptionText>
                    </ViewsDurationContainer>
                  </ChannelNameDurationContainer>
                </VideoTitleAndDetailsContainer>
              </VideoDetailsContainer>
            </VideoItemContainer>
          </VideoItemLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
