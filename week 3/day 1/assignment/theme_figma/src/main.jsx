import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ThemedContextProvider} from './context/ThemedContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemedContextProvider>
    <App />
    </ThemedContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
