import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCalendarAlt);
export const Navbar = () => {
    return (
        <>
 
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <Link to={'/'} className="navbar-brand" aria-current="page"><FontAwesomeIcon icon={faCalendarAlt} /></Link>
           
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to={'/'}  className="nav-link active" aria-current="page">Zapatillas </Link>
                  <Link to={'/zapatillas'} className="nav-link">Short</Link>
                  <Link to={'/short'} className="nav-link">Calzas</Link>
                  <Link to={'/calzas'} className="nav-link">Poleras</Link>
            
                  <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Carteras</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Chaquetas</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Buzos</a></li>
          </ul>
        </li>
                </div>
            </div>
            </div>
        </nav>
        </>
    )
}