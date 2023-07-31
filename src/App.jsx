import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './assets/pages/Home'
import './App.css'
import CardDetail from './assets/components/CardDetail'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/detail/:id" element={<CardDetail></CardDetail>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
