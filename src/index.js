import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import App from './App'
import './index.css'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID_WEB)
ReactDOM.render(<App />, document.getElementById('root'))