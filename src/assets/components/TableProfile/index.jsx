import React from 'react';
import './tableProfile.css';

const TableProfile = ({ user }) => {
  // Verificar si el rol es "admin", de lo contrario, establecerlo como "usuario"
  const role = user.rol === 'admin' ? user.rol : 'usuario';

  return (
    <table className="table">
      <tbody>
        <tr className="table-custom-header">
          <th>Nombre:</th>
          <td>{user.nombre}</td>
        </tr>
        <tr className="table-custom-header">
          <th>Apellido:</th>
          <td>{user.apellido}</td>
        </tr>
        <tr className="table-custom-header">
          <th>Email:</th>
          <td>{user.email}</td>
        </tr>
        <tr className="table-custom-header">
          <th>Rol:</th>
          <td>{role}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableProfile;
