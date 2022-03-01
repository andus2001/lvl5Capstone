import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './index.css'

import App from './App'
import { ThemeContextProvider } from './themeContext'

ReactDom.render(
    <ThemeContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeContextProvider>
    , document.getElementById('root')
)