import React from 'react'
import Carousel from 'nuka-carousel';
import s from './CarouselComponent.module.css';
import BannerOne from '../../images/Banner1.jpg'
import BannerTwo from '../../images/Banner2.jpg'
import BannerThree from '../../images/Banner3.jpg'

const CarouselComponent = () => {
  return (
    <Carousel className={s.CarouselContainer} autoplay={true} wrapAround={true}
      renderCenterLeftControls={({ previousSlide }) => (
        <button style={{ marginLeft: "24px", backgroundColor: "transparent", border: "none", cursor: "pointer" }} onClick={previousSlide}>
          <i style={{ color: "blueviolet", fontSize: "50px" }} className="fa-light fa-angle-left">&#60;</i>
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button style={{ marginRight: "4px", backgroundColor: "transparent", border: "none", cursor: "pointer" }} onClick={nextSlide}>
          <i style={{ color: "blueviolet", fontSize: "50px" }} className="fa-light fa-angle-right">&#62;</i>
        </button>
      )}
      renderBottomCenterControls={false}

    >
      <img src={BannerOne} alt="banner" />
      <img src={BannerTwo} alt="banner" />
      <img src={BannerThree} alt="banner" />
    </Carousel>
  )
}

export default CarouselComponent