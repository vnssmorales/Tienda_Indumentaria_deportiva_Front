import { useContext, useEffect, useState } from 'react';
import CardProduct from "./CardProduct"
import Checkbox_Group from "./Checkbox_Group"
import ProductsContext from '../store/StateContext';
const URL = "https://fakestoreapi.com/products"

const CardContext = () => {
    const { products } = useContext(ProductsContext)
    const [productsApi, setProductsApi] = useState([products])
    const [filtedProducts, setFiltedProducts] = useState([])
    useEffect(() => {
        setProductsApi(products);
        setFiltedProducts(products);
      }, [products])
    const filterProducts = () => {
        let checkBoxs = document.querySelectorAll('input[type=checkbox]');
        let checkedCategories = []
        checkBoxs.forEach(check => { if (check.checked) checkedCategories.push(check.value) })
        let textInputValue = document.getElementById("textsearch").value
        console.log(textInputValue)
        if (textInputValue == "" && checkedCategories.length == 0) {
            console.log("1 - Sin texto / Sin categoria");
            setFiltedProducts(products)
        }
        if (textInputValue != "" && checkedCategories.length == 0) {
            console.log("2 - Texto / Sin categoria");
            let filtedProductsText = filtedProducts.filter(product => product.title.toLowerCase().includes(textInputValue.toLowerCase()))
            setFiltedProducts(filtedProductsText)
        }
        if (textInputValue == "" && checkedCategories.length != 0) {
            console.log("3 - Sin texto / Con categoria");
            let filtedProductsChecked = productsApi.filter(product => checkedCategories.includes(product.category))
            //console.log(filtedProductsChecked);
            setFiltedProducts(filtedProductsChecked)
        }
        if (textInputValue != "" && checkedCategories.length != 0) {
            console.log("4 - Con texto / Con categoria");
            let filtedProductsTextAndCheckBoxs = filtedProducts.filter(product => product.title.toLowerCase().includes(textInputValue.toLowerCase()) && checkedCategories.includes(product.category))
            setFiltedProducts(filtedProductsTextAndCheckBoxs)
        }
    }
    return (
        <>
            <Checkbox_Group filterProducts={filterProducts}></Checkbox_Group>

            <section>
                <div className="container pb-5">
                    <div className="row" id="contenedorCards">
                        {filtedProducts.map((product, index) => {

                            return (<CardProduct key={index} product={product}></CardProduct>)

                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardContext;