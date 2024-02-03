

import React from 'react';
import AdminUsers from '../AdminUser/adminUser';
import { useAuth } from '../../context/AuthContext';

const AdminUsersList = ({ users }) => {
  const { isAuthenticated } = useAuth();
  const handleDelete = async (userId) => {
    try {
      // Realiza una solicitud DELETE al backend para eliminar el usuario
      if (isAuthenticated){
      const token = localStorage.getItem('token');
      console.log('Token almacenado:', token);
      const response = await fetch(`https://donulayback.onrender.com/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': ` ${token}`,
        },
      });

      if (response.ok) {
        // Lógica para actualizar el estado después de eliminar el usuario
        console.log(`Usuario con ID ${userId} eliminado exitosamente`);
      } else {
        console.error('Error al eliminar el usuario:', response.statusText);
      }
    }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };
  return (
    <div className="userList">
      {users.map(user => (
        <AdminUsers
          key={user._id}
          {...user}
          onDelete={() => handleDelete(user._Id)}
          
        />
      ))}
    </div>
  );
};

export default AdminUsersList;