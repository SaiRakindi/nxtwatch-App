import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 30px;
  }
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const WebsiteLogoCloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`
export const BannerWebsiteLogo = styled.img`
  width: 160px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
export const BannerCloseButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 10px;
`
export const BannerDescription = styled.p`
  width: 100%;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #21293e;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 40%;
    font-size: 16px;
    margin-bottom: 30px;
  }
`
export const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  color: #21293e;
  font-weight: bold;
  border: 2px solid #21293e;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
`
