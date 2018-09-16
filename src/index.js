import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom' 
import SearchBook from './SearchBooks'

ReactDOM.render(
    <BrowserRouter><SearchBook /></BrowserRouter>, document.getElementById('root'))
//ReactDOM.render(<CategoryBooks />, document.getElementById('root'))
