import './assets/css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    render() {
        return (
            <div>
                <h1>asd</h1>
            </div>
        )
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
