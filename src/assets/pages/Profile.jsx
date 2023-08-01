import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";



const UserProfile = () => {//{ user }
    let user = {
        "nombre": "Pepito",
        "apellido": "Morales",
        "email": "pepe@gmail.com",
        "password": "pepe2023",
        "rol": "user"
    }
    return (
        <div className="container">
            <div className="row">
                <div className='col'></div>
                <div className="col-6"></div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{user.nombre}</h5>
                        <p className="card-text">{user.apellido}</p>
                        <p className="card-title">{user.email}</p>
                        <span className="card-link">Rol: <span>{user.rol}</span></span>
                    </div>
                </div>
                <div className='col'></div>
            </div>
        </div>
    );
};

export default UserProfile;