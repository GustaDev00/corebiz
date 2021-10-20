import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios"
import Slider from "react-slick";

import Flag from '../assets/img/icon/flag.svg'
import IconStarEmpty from '../assets/img/icon/star-empty.svg'
import IconStar from '../assets/img/icon/star.svg'


const Api = ({ setCart }) => {

  const [produtos, setProdutos] = useState([])

  const handleAddToCart = useCallback(
    (receivedProduct) => {
      setCart((oldCart) => {
        const newCart = [...oldCart, receivedProduct]
        localStorage.setItem('@testeGusta:cart', JSON.stringify(newCart))
        return newCart
      })
    }, [setCart]
  )

  const ConverterPreco = (valor) => {
    var tmp = valor + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
      tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }

  const star = (qtd) => {
    var line = [];
    for (var i = 0; i < 5; i++) {
      line.push(i < qtd ? <img src={IconStar} alt="Estrela cheia" /> : <img src={IconStarEmpty} alt="Estrela vazia" />);
    }
    return line;
  }


  useEffect(
    () => {
      axios.get(`https://corebiz-test.herokuapp.com/api/v1/products`)
        .then(response => {
          const dados = response.data
          setProdutos(dados)
        })
    }, []
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <main>
      <div className="category">
        <h2>Mais Vendidos</h2>
        <div className="bar"></div>
      </div>
      <div className="products">
        <Slider {...settings}>
          {produtos.map(product =>
            <div className="card-product" key={product.productId}>
              <div className="card-img">
                {product.listPrice != null && (<img className="flag" src={Flag} alt="{product.productName}" />)}
                <img src={product.imageUrl} alt="{product.productName}" />
              </div>
              <div className="about-card-product">
                <div className="card-name">
                  <h2>{product.productName}</h2>
                  <div className="avaliacao">
                    {star(product.stars)}
                  </div>
                </div>

                <div className="price-product">
                  {product.listPrice && (
                    <p>de <s>R$ {ConverterPreco(product.listPrice)}</s></p>
                  )}
                  <h3>por R$ {ConverterPreco(product.price)}</h3>
                  {product.installments.length > 0 && (
                    <p>ou em {product.installments[0].quantity}x de R$ {ConverterPreco(product.installments[0].value)}</p>
                  )}
                  <button onClick={() => { handleAddToCart(product) }}>COMPRAR</button>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </main>
  )
}

export default Api
