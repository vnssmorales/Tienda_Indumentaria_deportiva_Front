import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../store/StateContext';
import './NavCategorias.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import AuthContext from '../../profileContext/AuthContext';

library.add(faCalendarAlt, faSignInAlt, faSignOutAlt);

const NavCategorias = () => {
    const categories = ['zapatillas', 'shorts', 'calzas', 'poleras'];
    const { filterProductsByCategory } = useContext(ProductsContext);
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    const getCookie = (name) =>{
        const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
       }

    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = async () => {
        try{
            axios.defaults.withCredentials = true;
            await axios.post('http://localhost:3100/auth/logout')
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            setIsLoggedIn(false);
            window.location.href = "/login";
        }catch(error){
            console.log(error);
        }
    };


    const manejarClickDelBoton = (category) => {
        filterProductsByCategory(category);
    };

    const mostrarTodo = () => {
        filterProductsByCategory(null);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#A100FE', padding: '10px 0' }}>
            <div className="container">
            <Link className="navbar-brand" to="/">Mi Tienda</Link>

            {isLoggedIn ? (
           <Link to={'/'} className="nav-link" onClick={handleLogout}>
             <FontAwesomeIcon icon={faSignOutAlt} /> Logout
           </Link>
                    ) : (
                     <Link to={'/login'} className="nav-link">
                     <FontAwesomeIcon icon={faSignInAlt}/> Login</Link>

                                )}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className='btn-nav'onClick={mostrarTodo}>Todos los productos</button>
                        </li>
                        {categories.map((category) => (
                            <li className="nav-item" key={category}>
                                <button className='btn-nav' onClick={() => manejarClickDelBoton(category)}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        
    );
};

export default NavCategorias;
