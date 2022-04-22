import styled from 'styled-components'

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`

export const SidebarAndVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const VideosPageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`
export const VideosAndSearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`
export const SearchBarContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  border: 1.5px solid #d1d1d1;
  @media (min-width: 768px) {
    max-width: 450px;
  }
  border-radius: 6px;
  background: transparent;
`
export const SearchInputContainer = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: 'Roboto';
  border-radius: 6px 0 0 6px;
  background-color: transparent;
  color: ${props => (props.dark ? '#f9f9f9' : '#b2b8b4')};
`
export const SearchButton = styled.button`
  padding: 10px 30px;
  border: none;
  outline: none;
  cursor: pointer;
  border-left: 2px solid #d0d0d0;
  background-color: ${props => (props.dark ? '#313031' : '#f4f4f4')};
`
export const VideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: transparent;
`
export const FailureNotFoundContainer = styled(VideosContainer)`
  background-color: ${props => (props.dark ? '#181818' : '#F9F9F9')};
  flex-direction: column;
  justify-content: space-between
  padding: 30px 20px;
`
export const FailedNotFoundImage = styled.img`
  width: 100%;
  max-width: 300px;
`
export const FailedNotFoundHeading = styled.h1`
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
export const FailedNotFoundDescription = styled.p`
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
export const VideosListContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  padding-left: 0;
  @media (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
