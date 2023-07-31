import { useContext, useEffect, useState } from 'react';
const URL =  `https://fakestoreapi.com/products/${1}`


const CardDetail = () => {
  const [product, setProduct] = useState([])
    
    useEffect(() => {
        axios.get(URL)
        .then(response => {
          console.log(response.data)
          setProduct(response.data)
        })
        .catch(error => console.log(error))
      }, [])


    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src={product.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{product.category}</li>
                </ul>
                <div className="card-body">
                    <h3 href="#" className="card-link">{product.price}</h3>
                </div>
        </div>
    )
}

export default CardDetail