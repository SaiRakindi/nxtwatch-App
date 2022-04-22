import styled from 'styled-components'

export const NotFoundPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const SidebarVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
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
  color: ${props => (props.dark ? '#F6F8FC' : '#1C293A')};
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
