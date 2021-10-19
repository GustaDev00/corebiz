import React from "react";
import Slider from "react-slick";

//Imagens
import Banner from '../assets/img/banner.png'

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="BannersSlick">
        <Slider {...settings}>
          <figure>
            <img src={Banner} alt="Banners" />
            <figcaption>
            <h4>Olá, o que você está buscando?</h4>
            <h3>Criar ou migrar seu e-commerce?</h3>
            </figcaption>
          </figure>
        </Slider>
      </div>
    );
  }
}
