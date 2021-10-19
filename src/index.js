import './assets/css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Banners from './components/SimpleSlider'
import Produtos from './components/Produtos'
import News from './components/News'

class App extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Banners />
                <Produtos />
                <News />
                <Footer />
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
