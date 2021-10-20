import '../../assets/scss/style.scss'

import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banners from '../../components/SimpleSlider'
import Produtos from '../../components/Produtos'
import News from '../../components/News'
import { useState } from 'react'


const Home = () => {

    const [cart, setCart] = useState(() => {
        const recoveryCart = localStorage.getItem('@testeGusta:cart')
        return recoveryCart ? JSON.parse(recoveryCart) : []
      })

    return (
        <div>
            <Header cart={cart} />
            <Banners />
            <Produtos setCart={setCart} />
            <News />
            <Footer />
        </div>
    )
}

export default Home
