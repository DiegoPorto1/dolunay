
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();  


  useEffect(() => {
   

    if (isAuthenticated) {
      navigate('/admin')
      console.log('Usuario autenticado. Realizar acciones...');
    } else {
     
      console.log('Usuario no autenticado. Realizar otras acciones...');
    }

    
   
  }, [isAuthenticated]); 

  const handleLogin = async () => {
    try {
        console.log('Datos enviados al backend:', { email, password }); // Agrega este log

      login({email : email, password: password});
    
      navigate('/admin')
    } catch (error) {

      
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
