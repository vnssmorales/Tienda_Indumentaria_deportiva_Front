import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import React from "react";
import ProductsContext from "../store/StateContext";

 const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { setIsLoggedIn } = useContext(ProductsContext);
    const navigate = useNavigate();

    const handleSubmit =  async (e) => {
        e.preventDefault();

    try{
        axios.defaults.withCredentials = true;
        const response = await axios.post("http://localhost:3100/auth/login", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }, {headers: {'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json'}}).then((response) => {
            // console.log(response.data);

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
          <div className="contenedor-login" style={{width: '100%', height: '650px', backgroundColor: 'rgb(234, 225, 225)', padding: '3% 0'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Login Page</h5>
                </div>
                <form onSubmit={handleSubmit} action="" method="POST">
                  <div className="modal-body">
                
                  <input
                  style={{marginBottom: '20px', width: '100%'}}
                  ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                 
                 <input
                 style={{marginBottom: '20px', width: '100%'}}
                 ref={passwordRef}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    />
                    </div>
                    <div className="modal-footer" style={{width: '100%', justifyContent: 'space-between'}} >
    
                    <button type="submit" className="btn btn-primary" style={{width: '200px'}}> Login </button>
                   <Link to="/register">
                   <button type="submit"className="btn btn-primary" style={{width: '200px'}}> Registro </button>
                    </Link>
                    </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </>
      );
    };
    

    export default Login;