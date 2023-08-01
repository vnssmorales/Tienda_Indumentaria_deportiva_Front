import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './assets/pages/Home'
import React from 'react'
import CardDetail from './assets/components/CardDetail'
import { Navbar } from './assets/components/Navbar/navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/detail/:id" element={<CardDetail></CardDetail>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
