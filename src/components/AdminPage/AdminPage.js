import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';

const AdminPage = () => {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      
      logout();
    
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };
  

  return (
    <div>
      {isAuthenticated ? (
    <div>
      <h2>Panel de Administrador</h2>
      <div>
        <Link to="/admin/uploader">
          <button>Agregar Producto</button>
        </Link>
      </div>
      <div>
        <Link to="/admin/products">
          <button>Modificar/Eliminar Productos</button>
        </Link>
      </div>
      <div>
        <Link to="/admin/users">
          <button>Modificar/Eliminar usuarios</button>
        </Link>
      </div>
      <div>
        
          <button onClick={handleLogout} >Logout</button>
        
      </div>
    </div>
) : (
  <Link to="/login">
          <button>Iniciar sesion</button>
        </Link>
  )}
</div>
  );
};

export default AdminPage;