import React from 'react';
import AdminUsers from '../AdminUser/adminUser';
import axios from 'axios';

const AdminUsersList = ({ users }) => {
    const handleDelete = async (userId) => {
        try {
          // Realiza una solicitud DELETE al backend para eliminar el usuario
          await axios.delete(`http://localhost:4000/api/users/${userId}`);
    
          // Lógica para actualizar el estado después de eliminar el usuario
          console.log(`Usuario con ID ${userId} eliminado exitosamente`);
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