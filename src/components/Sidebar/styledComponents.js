import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 25%;
  min-width: 220px;
  max-width: 250px;
  height: 100vh;
  padding: 20px 0;
  padding-bottom: 100px;
  background-color: ${props => props.color};
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  display: none;
`
export const LinksContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
`
export const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 20px;
`
export const ContactUsHeading = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.dark ? '#f9f9f9' : '#2D4D70')};
`
export const ContactUsWebsitesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 0;
`
export const ContactUsWebsiteImage = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const ContactUsDescription = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.dark ? '#f9f9f9' : '#2D4D70')};
  line-height: 1.5;
`
