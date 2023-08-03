import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableProfile from '../components/TableProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
       
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3100/api/current', { withCredentials: true });
                setUser(response.data.user); 
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!user) return <div>Loading...</div>;  
    return (
        
        <div className="container mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                    <div className="card mb-3">
                        <div className="card-body">
                        <h4 className="mb-4" style={{ color: "#A100FE" }}><FontAwesomeIcon icon={faUser} /> Información del usuario  </h4>
                            <TableProfile user={user} />

                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>


    );
};

export default UserProfile;
