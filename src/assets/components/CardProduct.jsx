import { Link } from "react-router-dom";

function CardProduct(props) {
  return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.product.image} alt="Card image cap" style={{ height: "200px" }} />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">{props.product.description}</p>
          <p className="card-text">{props.product.category}</p>
        </div>
        <div className="card-body">
          <span className="card-link">Price $<span>{props.product.price}</span></span>
          <Link to={`../detail/${props.product._id}`} className="card-link">More info...</Link>
        </div>
      </div>
  );
}

export default CardProduct;