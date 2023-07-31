import { useContext, useEffect, useState } from 'react'
import ProductsContext from './store/StateContext'


function App() {
 
const {products} = useContext(ProductsContext)

  useEffect(()=>{
    console.log(products)
  },[products])

  return (
    <>
      
    </>

  )
}

export default App
