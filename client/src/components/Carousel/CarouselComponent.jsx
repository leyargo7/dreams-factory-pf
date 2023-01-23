import React from 'react'
import Carousel from 'nuka-carousel';
import s from './CarouselComponent.module.css';
import BannerOne from '../../images/Banner1.jpg'
import BannerTwo from '../../images/Banner2.jpg'
import BannerThree from '../../images/Banner3.jpg'

const CarouselComponent = () => {
  return (
  <Carousel className={s.CarouselContainer} autoplay={true} wrapAround = {true}
  renderCenterLeftControls={({ previousSlide }) => (
    <button style={{marginLeft:"100px", backgroundColor:"transparent", border:"none", cursor:"pointer" }} onClick={previousSlide}>
      <i className="fa-light fa-angle-left">&#60;</i>
    </button>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <button style={{marginRight:"100px", backgroundColor:"transparent", border:"none", cursor:"pointer"   }}  onClick={nextSlide}>
      <i className="fa-light fa-angle-right">&#62;</i>
    </button>
  )}
  renderBottomCenterControls={false}

  >
    <img className={s.bannerone} src={BannerOne} alt="banner" />
    <img className={s.bannertwo} src={BannerTwo} alt="banner" />
    <img className={s.bannerthree} src={BannerThree} alt="banner" />
  </Carousel>
  )
}

export default CarouselComponent