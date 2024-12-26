import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      title="My App Title"
      message="You are a master in the art of clicking!"
      hoverMessage="Please click on me now!"
    />
  </React.StrictMode>
)