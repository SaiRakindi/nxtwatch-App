import {MdClose} from 'react-icons/md'

import {
  BannerContainer,
  WebsiteLogoCloseButtonContainer,
  BannerWebsiteLogo,
  BannerCloseButton,
  BannerDescription,
  BannerButton,
} from './styledComponents'

const Banner = props => {
  const {onClickCloseButton} = props
  return (
    <BannerContainer data-testid="banner">
      <WebsiteLogoCloseButtonContainer>
        <BannerWebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCloseButton onClick={onClickCloseButton} data-testid="close">
          <MdClose size="30" />
        </BannerCloseButton>
      </WebsiteLogoCloseButtonContainer>
      <BannerDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerDescription>
      <BannerButton>GET IT NOW</BannerButton>
    </BannerContainer>
  )
}

export default Banner
