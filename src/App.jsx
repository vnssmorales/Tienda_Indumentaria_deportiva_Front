import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './assets/pages/Home'
import React from 'react'
import CardDetail from './assets/components/CardDetail'

import NavCategorias from './assets/components/NavCategorias/index'
import CardDetailEditDelete from './assets/components/CardDetailEditDelete'
import Footer from './assets/components/Footer'
import UserProfile from './assets/pages/Profile'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'

function App() {

  return (
    <>
      <Router>
        <NavCategorias/>
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
          <Route path="/" element={<Home />}/>
          <Route path="/productos/edit/:id" element={<CardDetailEditDelete />}/>
          <Route path="/productos/:id" element={<CardDetail />}/>
          <Route path="/usuario" element={<UserProfile />}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default App
