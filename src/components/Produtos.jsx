import React from 'react'
import axios from "axios"
import Slider from "react-slick";

export default class Api extends React.Component {

  state = {
    produtos: []
  }

  componentDidMount() {
    axios.get(`https://corebiz-test.herokuapp.com/api/v1/products`)
      .then(response => {
        const produtos = response.data
        this.setState({ produtos })
      })
  }

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
      <main>
        {/* <Slider {...settings}> */}
        {this.state.produtos.map(product =>
          <div className="CardProduct">
            <div className="CardImg">
              <img src={product.imageUrl} alt="{product.productName}" />
            </div>
            <div className="AboutCardProduct">
              <div className="CardName">
                <h2>{product.productName}</h2>
                <div className="avaliacao">
                  <span>{product.stars}</span>
                </div>
              </div>

              <div className="PriceProduct">
                <h3>por R$ {product.price}</h3>
                <p>ou em Yx de R$ pr,ic</p>
                <button>COMPRAR</button>
              </div>
            </div>

            <li></li>
          </div>
        )}
        {/* </Slider> */}
      </main>
    )
  }
}
