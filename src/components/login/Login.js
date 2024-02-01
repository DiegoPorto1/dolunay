import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Asegúrate de importar el contexto correctamente.


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();  // Obtén la función login del contexto.

  const handleLogin = async () => {
    try {
        console.log('Datos enviados al backend:', { email, password }); // Agrega este log

      
      // Llama a la función login del contexto para manejar la autenticación.
      login({email : email, password: password});
      
      // Puedes manejar el estado de la aplicación o redirigir a otra página después del inicio de sesión exitoso.
      navigate('/admin');
    } catch (error) {
      console.error('Error during login:', error.message);
      // Puedes mostrar un mensaje de error o manejar la lógica de error de otra manera.
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Mail:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;