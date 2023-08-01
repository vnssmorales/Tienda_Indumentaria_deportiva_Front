import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../store/StateContext';

const NavCategorias = () => {
    const categories = ['zapatillas', 'shorts', 'calzas', 'poleras'];
    const { filterProductsByCategory } = useContext(ProductsContext);

    const buttonStyle = {
        backgroundColor: '#A100FE', 
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px',
        transition: 'transform 0.2s, background-color 0.2s', // Transiciones para hover
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra para un aspecto elevado
        fontFamily: 'Comfortaa, sans-serif'
    };

    const buttonHoverStyle = {
        backgroundColor: '#8200C7', // Nuevo color morado más oscuro para el hover
    };

    const navBrandStyle = {
        fontFamily: 'Rowdies, sans-serif', // Reemplaza 'NuevaFuente' con el nombre de tu fuente importada
        fontSize: '24px',
        color: 'white',
        textDecoration: 'none',
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
            <Link className="navbar-brand" to="/" style={navBrandStyle}>Mi Tienda</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button
                                style={{ ...buttonStyle, ...buttonHoverStyle }} // Combinar estilos para hover
                                onClick={mostrarTodo}
                            >
                                Todos los productos
                            </button>
                        </li>

                        {categories.map((category) => (
                            <li className="nav-item" key={category}>
                                <button
                                    style={{ ...buttonStyle, ...buttonHoverStyle }} // Combinar estilos para hover
                                    onClick={() => manejarClickDelBoton(category)}
                                >
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
