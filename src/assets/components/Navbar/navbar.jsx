import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../store/StateContext';
import './NavCategorias.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

// Agregamos los íconos a la biblioteca de Font Awesome
library.add(faCalendarAlt, faSignInAlt, faSignOutAlt);

const NavCategorias = () => {
  // Lista de categorías
  const categories = ['zapatillas', 'shorts', 'calzas', 'poleras'];

  // Obtenemos el contexto del estado de los productos y del estado de inicio de sesión
  const { filterProductsByCategory } = useContext(ProductsContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(ProductsContext);

  // Estado local para almacenar la información del usuario
  const [userData, setUserData] = useState(null);

  // Función para obtener el valor de una cookie por su nombre
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  useEffect(() => {
    // Verificamos si hay un token almacenado en la cookie para determinar si el usuario está conectado o no
    const token = getCookie('token');
    console.log("token almacenado en cookie: ", token);
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  // Función para manejar el evento de cierre de sesión
  const handleLogout = async () => {
    try {
      axios.defaults.withCredentials = true;
      await axios.post('http://localhost:3100/auth/logout');
      // Borramos el token almacenado en la cookie
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setIsLoggedIn(false);
      // Redireccionamos a la página de inicio de sesión
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  // Función para filtrar productos por categoría
  const manejarClickDelBoton = (category) => {
    filterProductsByCategory(category);
  };

  // Función para mostrar todos los productos sin filtro de categoría
  const mostrarTodo = () => {
    filterProductsByCategory(null);
  };

  // Utilizamos react-responsive para definir el punto de quiebre en el cual cambia el diseño
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: '#A100FE', padding: '10px 0' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            {/* Renderizamos el enlace de inicio de sesión o cierre de sesión dependiendo del estado de inicio de sesión */}
            {isLoggedIn ? (
              <Nav.Link as={Link} to={'/'} onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to={'/login'}>
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Nav.Link>
            )}

            {/* Mostramos el botón para mostrar todos los productos */}
            {!isSmallScreen && (
              <Nav.Link onClick={mostrarTodo}>Todos los productos</Nav.Link>
            )}

            {/* Renderizamos el dropdown o los botones para cada categoría dependiendo del tamaño de la pantalla */}
            {isSmallScreen ? (
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                {categories.map((category) => (
                  <NavDropdown.Item
                    key={category}
                    onClick={() => manejarClickDelBoton(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : (
              categories.map((category) => (
                <Nav.Link
                  key={category}
                  onClick={() => manejarClickDelBoton(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Nav.Link>
              ))
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavCategorias;
