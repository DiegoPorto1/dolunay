import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminPage = () => {
  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // Realiza una solicitud DELETE al backend para cerrar sesión
      const response = await axios.delete('http://localhost:4000/api/session/logout', {
        headers: {
          'Content-Type': 'application/json',
          // Puedes incluir cualquier otra información de encabezado necesaria
        },
      });

      console.log(response.data.message); // Mensaje del backend
      // Redirige a la página de inicio de sesión o a donde desees después del logout
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };


  return (
    <div>
      {isAuthenticated() ? (
    <div>
      <h2>Panel de Administrador</h2>
      <div>
        <Link to="/admin/agregar-producto">
          <button>Agregar Producto</button>
        </Link>
      </div>
      <div>
        <Link to="/admin/modificar-productos">
          <button>Modificar/Eliminar Productos</button>
        </Link>
      </div>
      <div>
        
          <button onClick={handleLogout} >Logout</button>
        
      </div>
    </div>
) : (
  <p>Debes iniciar sesión</p>
  )}
</div>
  );
};

export default AdminPage;