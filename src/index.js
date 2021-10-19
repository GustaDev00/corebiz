import './assets/css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'

class App extends React.Component{
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
