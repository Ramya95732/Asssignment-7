import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TextItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.isActive};
`
export const IteMText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const IconImage = styled.img`
  width: 30px;
  height: 30px;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SideBarBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
`
export const BottomText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: ${props => props.color};
`
