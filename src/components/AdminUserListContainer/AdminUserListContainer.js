import React, { useState, useEffect } from 'react';
import AdminUsersList from '../adminUserList/adminUserList';
import { useAuth } from '../../context/AuthContext';

const AdminUserListContainer = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Obtener todos los usuarios
        if (isAuthenticated) {
        const token = localStorage.getItem('token');
        const response = await fetch('https://donulayback.onrender.com/api/users', {
          headers: {
            'Authorization': ` ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          console.log("este es el response de userAdmn", data);
        } else {
          console.error('Error al obtener usuarios:', response.statusText);
        }}
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