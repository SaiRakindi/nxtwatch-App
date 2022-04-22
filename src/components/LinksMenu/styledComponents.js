import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkContainer = styled.li`
  width: 100%;
  height: 45px;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    min-width: 500px;
  }
`
export const MenuLink = styled(Link)`
  width: 100%;
  padding: 10px 160px;
  display: flex;
  align-items: center;
  text-decoration: none;
  @media (min-width: 768px) {
    padding: 10px 40px;
    justify-content: flex-start;
  }
`
export const LinkName = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-left: 22px;
  color: ${props => props.color};
`
