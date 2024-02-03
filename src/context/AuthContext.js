import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated,setIsAuthenticated]= useState(
    localStorage.getItem('token') !== null
  );
  const login = async (userData) => {
    try {
      const response = await axios.post('https://donulayback.onrender.com/api/session/login', userData);
  console.log("este es el user", userData)
  console.log("este es el response", response)
      if (response.status === 200) {
        const token = response.data; // Asegúrate de que el nombre del campo sea correcto
        setUser(response.data.user);
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setIsAuthenticated(true)
      } else {
        console.error('Error de autenticación');
      }
    } catch (error) {
      console.error('Error al comunicarse con el servidor', error);
    }
  };
  
  const logout = async () => {
    try {
      await axios.post('https://donulayback.onrender.com/api/session/logout');
  
     
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error al comunicarse con el servidor', error);
    }
  };

  /*const isAuthenticated = () => {
    // Verificar si el usuario está autenticado (por ejemplo, si hay información del usuario en el estado).
    return !!user;
  };*/

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};