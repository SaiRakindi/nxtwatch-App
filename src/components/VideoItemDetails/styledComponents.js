import styled from 'styled-components'

export const VideoDetailsPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`

export const SidebarVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding: 30px;
    padding-bottom: 100px;
  }
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 30px 0;
  }
`
export const VideoDetailsTitleLogoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#F1F1F1')};
  @media (min-width: 768px) {
    padding: 30px 50px;
  }
`
export const VideoDetailsLogoContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${props => (props.dark ? '#0F0F0F' : '#E1E9F0')};
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoDetailsTitle = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.dark ? '#F9FBFC' : '#20293c')};
  margin-bottom: 20px;
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: transparent;
`
export const FailureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  background-color: ${props => (props.dark ? '#181818' : '#F9F9F9')};
  padding: 30px 20px;
`
export const FailedImage = styled.img`
  width: 100%;
  max-width: 300px;
`
export const FailedHeading = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#F6F8FC' : '#1B2C41')};
  margin: 16px 0;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`
export const FailedDescription = styled.p`
  width: 100%;
  text-align: center;
  font-family: 'Roboto';
  color: #4d6480;
  margin: 10px 0;
  line-height: 1.5;
`
export const RetryButton = styled.button`
  width: 100px;
  height: 40px;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 16px;
`
export const ViewsCountStatButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ViewsCountDuration = styled.p`
  color: #92a5b5;
  font-size: 14px;
  font-family: 'Roboto';
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`
export const StatButton = styled.button`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Roboto';
  background: transparent;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 20px 0 0;
  @media (min-width: 768px) {
    margin: 0 0 0 20px;
  }
`
export const HRLine = styled.hr`
  width: 100%;
  height: 2px;
  margin-bottom: 10px;
  background-color: ${props => (props.dark ? '#65758a' : '#e6e5e5')};
`

export const ChannelDetailsContainer = styled.div`
  width: 100%;
  margin: 16px 0;
  display: flex;
  align-items: center;
`
export const ChannelLogo = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 16px;
`
export const ChannelNameSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ChannelName = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#20293c')};
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-bottom: 6px;
`
export const Subscribers = styled.p`
  color: #92a5b5;
  font-size: 14px;
  font-family: 'Roboto';
  margin-top: 5px;
`

export const VideoDescription = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#556579')};
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-left: 70px;
    font-size: 16px;
  }
`
