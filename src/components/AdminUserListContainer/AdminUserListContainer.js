import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminUsersList from '../adminUserList/adminUserList';

const AdminUserListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Obtener todos los usuarios
        const response = await axios.get('http://localhost:4000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="userListContainer">
      <h1>Usuarios</h1>
      <AdminUsersList users={users} />
    </div>
  );
};

export default AdminUserListContainer;