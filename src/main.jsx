import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductProvider from './store/StateProvider.jsx'
import { Auth } from 'aws-amplify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
)
