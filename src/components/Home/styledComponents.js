import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background-color: transparent;
  outline: none;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
`
export const HomeSideDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => props.bgColor};
`
export const BannerImage = styled.img`
  width: 230px;
`
export const HomeStickyDiv = styled.div`
  position: sticky;
`

export const GetItNowButton = styled.button`
  height: 30px;
  width: 130px;
`

export const BannerImageDiv = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  display: ${props => props.display};
  flex-direction: row;
`
