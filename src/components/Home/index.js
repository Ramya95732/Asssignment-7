import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'
import CartContext from '../../context/CartContext'

import SearchVideos from '../SearchVideos'

import {
  HomeContainer,
  HomeSideDiv,
  BannerImage,
  HomeStickyDiv,
  ModalContainer,
  CloseButton,
  GetItNowButton,
  BannerImageDiv,
} from './styledComponents'

import SideBar from '../SideBar'

class Home extends Component {
  state = {dispaly: 'flex'}

  onCloseBanner = () => {
    this.setState({dispaly: 'none'}, this.renderHomeVideos)
  }

  renderHomeVideos = () => {
    const {display} = this.state

    return (
      <>
        <BannerImageDiv data-testid="banner" display={display}>
          <ModalContainer>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <p>Buy Nxt Watch Premium</p>
            <GetItNowButton>GET IT NOW</GetItNowButton>
          </ModalContainer>
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <IoMdClose size={20} color="#231f20" />
          </CloseButton>
        </BannerImageDiv>
        <SearchVideos />
      </>
    )
  }

  render() {
    console.log('ramyaaa')
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <div data-testid="home">
              <Header />
              <HomeContainer bgColor={bgColor}>
                <HomeStickyDiv>
                  <SideBar onChangeActiveTab={this.onChangeActiveTab} />
                </HomeStickyDiv>
                <HomeSideDiv bgColor={bgColor}>
                  {this.renderHomeVideos()}
                </HomeSideDiv>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Home
