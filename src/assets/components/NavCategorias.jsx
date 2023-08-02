import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../store/StateContext';
import './NavCategorias.css';

const NavCategorias = () => {
    const categories = ['zapatillas', 'shorts', 'calzas', 'poleras'];
    const { filterProductsByCategory } = useContext(ProductsContext);

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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button 
                               className='btn-nav'
                          
                                onClick={mostrarTodo}
                            >
                                Todos los productos
                            </button>
                        </li>

                        {categories.map((category) => (
                            <li className="nav-item" key={category}>
                                <button
                                    className='btn-nav'
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
