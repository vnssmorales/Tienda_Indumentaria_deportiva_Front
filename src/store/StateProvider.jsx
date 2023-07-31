import { useEffect, useState } from "react";
import axios from 'axios'
import ProductsContext from "./StateContext";

const ProductProvider = ({ children }) => {
    const URL = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(URL)
                console.log(response.data)
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [])

    const initialState = {
        products
    }
    return(
        <ProductsContext.Provider value={ initialState }>
            { children }
        </ProductsContext.Provider>
    )
}
export default ProductProvider;