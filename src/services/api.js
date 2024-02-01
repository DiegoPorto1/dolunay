import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true, // Reemplaza con la URL y puerto de tu backend
});

export default api;