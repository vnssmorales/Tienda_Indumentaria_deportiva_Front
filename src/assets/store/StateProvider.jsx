import { useState, useEffect } from "react";
import StateContent from "./StateContext"
import React from "react";
import axios from 'axios'
import ProductsContext from "./StateContext";



const ProductProvider = ({ children }) => {
    //const URL = "https://fakestoreapi.com/products"
    const URL = "http://localhost:3100/api/productos"
    const [products, setProducts] = useState([])
    useEffect(() => {

        /* axios.get(URL)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('Error', error);
            }); */
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
    return (
        <ProductsContext.Provider value={initialState}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductProvider;