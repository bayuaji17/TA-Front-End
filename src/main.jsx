import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RoutesPages } from './router/RoutesPages.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesPages/>
    <ToastContainer/>
  </React.StrictMode>,
)
