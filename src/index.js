import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import { isCompositeComponent } from 'react-dom/test-utils'


ReactDOM.render(
  <Home/>,
  document.querySelector('#root')
)
