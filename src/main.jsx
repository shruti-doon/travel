import React from 'react'
import ReactDOM from 'react-dom/client'//Reactdom is library allowing to work for document object module
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot/*createroot gets passed in to getelementbtid method*/(document.getElementById/*method- root element*/('root')).render/*render method*/(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
