import { useContext, useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

//const URL = `http://localhost:3100/api/productos/`

const CardDetail = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams();
  console.log("CardDetail");
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:3100/api/productos/${id}`)
      .then(response => {
        console.log(response.data)
        setProduct(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="container justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h1>Detalles del producto</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center"> 
        <div className="col-md-4">
          <div className="card mb-4" style={{ marginBottom: '0' }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}> 
              <img className="card-img img-fluid" src={product.image} alt="Card image cap" />
            </div>
          </div>
        </div>
        <div className="col-md-8 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Categoría: {product.category}</li>
              </ul>
              <div className="card-body">
                <h3 className="card-link">Precio: ${product.price}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetail;
