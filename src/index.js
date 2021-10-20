import './assets/scss/style.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'


const App = () => {
    return (
        <Home />
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
