import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import React from "react";
import ProductsContext from "../store/StateContext";
import imagen1 from '../../img/imagen1.png'
import imagen2 from '../../img/imagen2.png'
import imagen3 from '../../img/imagen3.png'
import imagen4 from '../../img/imagen4.png'
import imagen5 from '../../img/imagen5.png'
import imagen6 from '../../img/imagen6.png'

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setIsLoggedIn } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.defaults.withCredentials = true;
      await axios.post("http://localhost:3100/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido, te has logueado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        setIsLoggedIn(true);
        
        navigate("/");
      });
    } catch (error) {
      console.log(error);

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'El email o la contraseña ingresados no son válidos',
      })
    }
  };

  return (
    <>
      <div className="modal" style={{ display: "block" }} tabIndex={"-1"}>
        <div className="contenedor-login" style={{ width: '100%', height: '650px', backgroundColor: 'white', padding: '3% 0' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Page</h5>
              </div>
              <form onSubmit={handleSubmit} action="" method="POST">
                <div className="modal-body">

                  <input
                    style={{ marginBottom: '20px', width: '100%' }}
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />

                  <input
                    style={{ marginBottom: '20px', width: '100%' }}
                    ref={passwordRef}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="modal-footer" style={{ width: '100%', justifyContent: 'space-between' }} >

                  <button type="submit" className="btn btn-primary" style={{ width: '200px', backgroundColor: '#A100FE', borderColor: '#A100FE' }}> Login </button>
                  <Link to="/register">
                    <button type="submit" className="btn btn-primary" style={{ width: '200px', backgroundColor: '#A100FE', borderColor: '#A100FE' }}> Registro </button>
                  </Link>
                </div>
              </form>

            </div>
            {/* Carrusel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ width: '70%', margin: 'auto', marginTop: '20px' }}>
            
              <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src={imagen1} className="d-block w-100" alt="Imagen 1" style={{ maxHeight: '250px' }} />
                </div>
                <div className="carousel-item">
                <img src={imagen2} className="d-block w-100" alt="Imagen 1" style={{ maxHeight: '250px' }} />
                </div>
                <div className="carousel-item">
                <img src={imagen3} className="d-block w-100" alt="Imagen 1" style={{ maxHeight: '250px' }} />
                </div>
                <div className="carousel-item">
                <img src={imagen4} className="d-block w-100" alt="Imagen 1" style={{ maxHeight: '250px' }} />
                </div>
                <div className="carousel-item">
                <img src={imagen5} className="d-block w-100" alt="Imagen 1" style={{ maxHeight: '250px' }} />
                </div>
                <div className="carousel-item">
                <img src={imagen6} className="d-block w-100" alt="Imagen 1" style={{ maxHeight: '250px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Login;
