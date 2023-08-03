import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import ProductsContext from "./StateContext";

const ProductProvider = ({ children }) => {
    const URL = "http://localhost:3100/api/productos";
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try{
            if(window.location.href != "http://localhost:3100/auth/login"){
                axios.defaults.withCredentials = true;
                const response = await axios.get(URL).catch(() =>{
                    window.location.href = "/login";
                })
                console.log(response.data);
                setProducts(response.data);
            }
            }catch(error){
                console.log(error);
            }
        };
        getProducts();
    }, []);

    const filterProductsByCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    const initialState = {
        products: filteredProducts,
        filterProductsByCategory,
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <ProductsContext.Provider value={initialState}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductProvider;




/* import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios'
import ProductsContext from "./StateContext";



const ProductProvider = ({ children }) => {
    const URL = "http://localhost:3100/api/productos"
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
    return (
        <ProductsContext.Provider value={initialState}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductProvider; */