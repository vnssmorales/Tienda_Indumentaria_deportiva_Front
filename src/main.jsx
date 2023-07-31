import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductProvider from './assets/store/StateProvider.jsx';
import AuthProvider from './profileContext/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
)
