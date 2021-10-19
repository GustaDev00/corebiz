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
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2
    };

    return (
      <main>
        <div className="Category">
          <h2>Mais Vendidos</h2>
          <div className="bar"></div>
        </div>
        <div className="Products">
        {/* <Slider {...settings}>  */}
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
          </div>
        )}
        {/* </Slider> */}
        </div>
      </main>
    )
  }
}
