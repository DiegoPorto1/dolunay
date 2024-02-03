import axios from 'axios';

const api = axios.create({
  baseURL: 'https://donulayback.onrender.com',
  withCredentials: true, // Reemplaza con la URL y puerto de tu backend
});

export default api;