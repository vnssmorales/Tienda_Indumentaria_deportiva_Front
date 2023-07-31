import { useState } from "react";
import StateContent from "./StateContext"

import axios from 'axios'
import ProductsContext from "./StateContext";



const ProductProvider = ({ children }) => {
    const URL = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(URL)
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(error => console.log(error))
    }, [])
    const initialState = {
        products
    }
    return(
        <ProductsContext value={ initialState }>
            { children }
        </ProductsContext>
    )
}
export default ProductProvider;