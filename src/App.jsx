import { useContext, useEffect, useState } from 'react'
import ProductProvider from './assets/store/StateProvider'
import './App.css'


function App() {
  
  let products = useContext(ProductProvider)
  useEffect(()=>{
    console.log(products)
  },[])

  return (
    <>
      
    </>

  )
}

export default App
