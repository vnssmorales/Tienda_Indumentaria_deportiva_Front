import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './assets/pages/Home'
import React from 'react'
import CardDetail from './assets/components/CardDetail'
import { Navbar } from './assets/components/Navbar/navbar'
import CardDetailEditDelete from './assets/components/CardDetailEditDelete'
import Footer from './assets/components/Footer'
import UserProfile from './assets/pages/Profile'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/productos/edit/:id" element={<CardDetailEditDelete></CardDetailEditDelete>}/>
          <Route path="/productos/:id" element={<CardDetail></CardDetail>}/>
          <Route path="/usuario" element={<UserProfile></UserProfile>}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default App
