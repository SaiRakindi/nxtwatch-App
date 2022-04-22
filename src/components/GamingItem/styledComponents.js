import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  width: 45%;
  margin: 16px 0 0 0;
  padding: 0 10px 10px 0;
  @media (min-width: 578px) {
    width: 32%;
  }
  @media (min-width: 768px) {
    width: 24%;
  }
`
export const VideoItemLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  padding: 16px 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#1e293b')};
  font-size: 14px;
  font-weight: 500;
  font-family: 'roboto';
  margin: 0 0 10px 0;
  line-height: 1.5;
`
export const WatchingCount = styled.p`
  color: #64748b;
  font-size: 14px;
  font-family: 'roboto';
  line-height: 1.5;
`
