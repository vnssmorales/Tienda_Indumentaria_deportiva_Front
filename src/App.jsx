import { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import ProductProvider from './assets/store/StateProvider'
import Home from './assets/pages/Home'
import axios from 'axios'
import './App.css'

const URL = "https://fakestoreapi.com/products"


function App() {
  
  /* let products = useContext(ProductProvider)
  useEffect(()=>{
    console.log(products)
  },[]) 
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(URL)
    .then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
    .catch(error => console.log(error))
  }, [])
  */
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
