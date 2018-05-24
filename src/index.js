import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Switch } from 'react-router-dom'

// knows it's .js file
import Header from './components/header/header-container'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Header />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
