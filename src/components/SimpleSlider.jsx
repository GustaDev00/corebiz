import React from "react";
import Slider from "react-slick";

//Imagens
import Banner from '../assets/img/banner.png'

const SimpleSlider = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

    return (
      <div className="banners-slick">
        <Slider {...settings}>
          <figure>
            <img src={Banner} alt="Banners" />
            <figcaption>
              <h4>Olá, o que você está buscando?</h4>
              <h3>Criar ou migrar seu e-commerce?</h3>
            </figcaption>
          </figure>
          <figure>
            <img src={Banner} alt="Banners" />
            <figcaption>
              <h4>Olá, o que você está buscando?</h4>
              <h3>Criar ou migrar seu e-commerce?</h3>
            </figcaption>
          </figure>
          <figure>
            <img src={Banner} alt="Banners" />
            <figcaption>
              <h4>Olá, o que você está buscando?</h4>
              <h3>Criar ou migrar seu e-commerce?</h3>
            </figcaption>
          </figure>
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

export default SimpleSlider
