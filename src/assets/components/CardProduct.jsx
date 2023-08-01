import { Link } from "react-router-dom";
import React from 'react';

function CardProduct(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card" style={{ width: "18rem", height: "100%" }}>
        <img className="card-img-top" src={props.product.image} alt="Card image cap" style={{ objectFit: "contain", height: "200px", marginTop: "20px" }} />
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h6 className="card-title">{props.product.title}</h6></li>
            <li className="list-group-item">{props.product.description}</li>
            <li className="list-group-item">{props.product.category}</li>
          </ul>
        </div>
        <div className="card-body">
          <span className="card-link">Price $<span>{props.product.price}</span></span>
          <Link to={`/productos/${props.product._id}`} className="card-link">More info...</Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;