import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemContainer,
  VideoItemLink,
  ThumbnailImage,
  VideoDetailsContainer,
  VideoTitle,
  WatchingCount,
} from './styledComponents'

const GamingItem = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <VideoItemContainer>
            <VideoItemLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <VideoTitle dark={darkTheme}>{title}</VideoTitle>
                <WatchingCount>{viewCount} Watching Worldwide</WatchingCount>
              </VideoDetailsContainer>
            </VideoItemLink>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingItem
