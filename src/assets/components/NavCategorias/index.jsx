import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../../store/StateContext';
import './NavCategorias.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import Swal from 'sweetalert2';

library.add(faCalendarAlt, faSignInAlt, faSignOutAlt);

const NavCategorias = () => {
  const categories = ['zapatillas', 'shorts', 'calzas', 'poleras', 'chaquetas', 'mochilas', 'otros'];
  const { filterProductsByCategory } = useContext(ProductsContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(ProductsContext);
  const [userData, setUserData] = useState(null);


  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  useEffect(() => {
    const token = getCookie('token');
    console.log("token almacenado en cookie: ", token)
    if (token) {
      setIsLoggedIn(true);
      getUserData();
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  }, [isLoggedIn]);

  const handleLogout = async () => {
    try {
      axios.defaults.withCredentials = true;
      await axios.post('http://localhost:3100/auth/logout')
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Hasta pronto!',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        setIsLoggedIn(false);
        window.location.href = "/login";
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  //metodo para obtener los datos del usuario logueado
  const getUserData = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/current', {
        withCredentials: true,
      });
      setUserData(response.data.user);
    } catch (error) {
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
        <Link className="navbar-brand" to={'/'} style={{ fontSize: '1.7rem' }}>La tuki tienda</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className='btn-nav' onClick={mostrarTodo}>Todos los productos</button>
            </li>
            {/* Renderizar solo los primeros 4 elementos en la barra de navegación */}
            {categories.slice(0, 3).map((category) => (
              <li className="nav-item" key={category}>
                <button className='btn-nav' onClick={() => manejarClickDelBoton(category)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
            {/* Mostrar los elementos restantes en el dropdown */}
            {categories.length > 3 && (
              <Dropdown as="li">
                <Dropdown.Toggle as="button" className="btn-nav">
                  Más categorías
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.slice(3).map((category) => (
                    <Dropdown.Item key={category} onClick={() => manejarClickDelBoton(category)}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                      <hr style={{margin: "5px 0"}} />
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
    {isLoggedIn && userData && (
        <Link to={'/usuario'}>
            <button className='btn-nav ms-3'>
                <FontAwesomeIcon icon={faUser} /> {userData.nombre}
            </button>
        </Link>
    )}

    {isLoggedIn ? (
        <Link to={'/'} className="nav-link ms-3" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Link>
    ) : (
        <Link to={'/login'} className="nav-link ms-3">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
    )}
</div>
      </div>

    </nav>
  );
};

export default NavCategorias;
