import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
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
export const VideosPageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`
export const TrendingTitleLogoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#F1F1F1')};
  @media (min-width: 768px) {
    padding: 30px 50px;
  }
`
export const TrendingLogoContainer = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${props => (props.dark ? '#0F0F0F' : '#E1E9F0')};
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TrendingTitle = styled.h1`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.dark ? '#F9FBFC' : '#20293c')};
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

export const VideosListContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  @media (min-width: 576px) {
    padding: 30px;
    margin: 0;
  }
  @media (min-width: 768px) {
    padding: 60px;
    margin: 0;
  }
`
