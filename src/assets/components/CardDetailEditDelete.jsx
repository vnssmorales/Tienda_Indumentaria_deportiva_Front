import { useContext, useEffect, useState, useRef } from 'react';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './editStyle.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CardDetailEditDelete = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3100/api/productos/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const response = await axios.get('http://localhost:3100/api/current', {
                withCredentials: true,
            });
            console.log(response.data);
            console.log(response.data.user.rol)
            if (response.data.user && response.data.user.rol === 'admin') {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    let title = useRef();
    let price = useRef();
    let description = useRef();
    let category = useRef();
    let image = useRef();

    const deleteProduct = () => {
        // Mostrar mensaje de confirmación antes de eliminar el producto
        Swal.fire({
          icon: 'warning',
          title: '¿Estás seguro?',
          text: 'Una vez eliminado, no podrás recuperar este producto.',
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#dc3545',
          cancelButtonColor: '#6c757d',
        }).then((result) => {
          if (result.isConfirmed) {
            // Si el usuario confirma, procede a eliminar el producto
            axios.delete(`http://localhost:3100/api/productos/${id}`)
              .then(response => {
                Swal.fire({
                  icon: 'success',
                  title: 'Producto eliminado con éxito',
                  showConfirmButton: false,
                  timer: 1500
                });
                window.location.href = "/";
              })
              .catch(error => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error al eliminar el producto',
                  text: 'Por favor, intenta nuevamente.',
                });
                console.log(error);
              });
          }
        });
      };



    const updateProduct = () => {
        let data = {};
        let enviar = false;
        if (image.current.value !== "") {
            data.image = image.current.value;
            enviar = true;
        }
        if (title.current.value !== "") {
            data.title = title.current.value;
            enviar = true;
        }
        if (price.current.value !== "") {
            data.price = price.current.value;
            enviar = true;
        }
        if (description.current.value !== "") {
            data.description = description.current.value;
            enviar = true;
        }
        if (category.current.value !== "") {
            data.category = category.current.value;
            enviar = true;
        }

        if (enviar) {
            axios.patch(`http://localhost:3100/api/productos/${id}`, data)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto actualizado con éxito',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(response);
                })
                .catch(error => console.log(error));
        }
    };




    return (
        <div className="container">

            <div className="card-container">
                <div className="product-image">
                    <h3>Modificar {product.title}</h3>
                    <img src={product.image} alt="Imagen del producto" />

                    <input ref={image} type="text" className="form-control" id="image" placeholder={product.image} />
                </div>
                <div className="product-details">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Nombre:
                            <input ref={title} type="text" className="form-control" id="title" placeholder={product.title} />
                            Descripción:
                            <input ref={description} type="text" className="form-control" id="description" placeholder={product.description} />


                        </li>
                        <li className="list-group-item">
                            Categoría:
                            <input ref={category} type="text" className="form-control" id="category" placeholder={product.category} />
                        </li>
                        <li className="list-group-item">
                            Precio:
                            <input ref={price} type="text" className="form-control" id="price" placeholder={product.price} />
                        </li>
                    </ul>
                    {isAdmin && (
                        <div className="action-buttons">
                            <button onClick={updateProduct} className="btn btn-editar">Editar</button>
                            <button onClick={deleteProduct} className="btn btn-eliminar">Eliminar</button>
                            <Link to="/" className="btn btn-primary" style={{ backgroundColor: '#A100FE' }}>Volver al inicio</Link>
                        </div>


                    )}


                </div>
            </div>
        </div>
    );
}

export default CardDetailEditDelete;
