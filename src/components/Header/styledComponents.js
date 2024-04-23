import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
`
export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
`
export const LogOutButton = styled.button`
  font-weight: 600;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #0967d2;
  outline: none;
  border: none;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
`
export const WebsiteLogo = styled.img`
   width: 110px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background-color: transparent;
  outline: none;
`
export const ConformButton = styled.button`
  background-color: transparent;
  outline: none;
`
export const ModelDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
`

export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  flex-direction: column;
  background-color:${props => props.background};
  }
`

export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color:${props => props.background};
`
export const ContentListItem = styled.li`
  display: flex;
`
export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
`
