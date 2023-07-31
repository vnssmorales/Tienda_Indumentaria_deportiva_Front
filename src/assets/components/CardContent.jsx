import { useContext, useEffect, useState } from 'react';
import axios from 'axios'

import CardProduct from "./CardProduct"
import Checkbox_Group from "./Checkbox_Group"
import StateContext from "../store/StateContext"
const URL = "https://fakestoreapi.com/products"

const CardContext = () => {
    const [products, setProducts] = useState([])
    const [filtedProducts, setFiltedProducts] = useState([])
    useEffect(() => {
        axios.get(URL)
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(error => console.log(error))
    }, [])

const filterProducts = () => {

}
    return (
        <>
            <Checkbox_Group filterProducts={filterProducts}></Checkbox_Group>

            <section>
                <div className="container pb-5">
                    <div className="row" id="contenedorCards">
                        {products.map((product, index) => {

                            return (<CardProduct key={index} product={product}></CardProduct>)

                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardContext;