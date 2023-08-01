import { useContext, useEffect, useState, useRef } from 'react';
import React from 'react';

const URL = `http://localhost:3100/api/productos/`
import axios from 'axios';
import { useParams } from 'react-router-dom';



const CardDetailEditDelete = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3100/api/productos/${id}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    let title = useRef();
    let price = useRef();
    let description = useRef();
    let category = useRef();
    let image = useRef();
    const deleteProduct = () =>{
        console.log("detele")
        axios.delete(`http://localhost:3100/api/productos/${id}`)
        .then(response => {
            alert("Producto Eliminado")
            //Poner redirección
        })
        .catch(error => {
            alert("Producto No Eliminado")
            console.log(error)
        })
    }
    const updateProduct = () => {
        console.log("editar")
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='col'></div>
                    <div className="col-6">
                        <div className="card" style={{ width: "24rem" }}>
                            <img className="card-img-top" src={product.image} alt="Card image cap" />{/*    */}
                            <div className="card-body">
                                <input ref={image} type="text" className="form-control" id="image" placeholder={product.image} />
                            </div>
                            <ul className="list-group list-group-flush">
                                <input ref={title} type="text" className="form-control" id="title" placeholder={product.title} />
                                <input ref={description} type="text" className="form-control" id="description" placeholder={product.description} />
                                <input ref={category} type="text" className="form-control" id="category" placeholder={product.category} />
                            </ul>
                            <div className="card-body">
                                <input ref={price} type="text" className="form-control" id="price" placeholder={product.price} />
                                <button onClick={() => updateProduct()} type="button" className="btn btn-success">Editar</button>
                                <button onClick={() => deleteProduct()} type="button" className="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
        </>
    )
}

export default CardDetailEditDelete