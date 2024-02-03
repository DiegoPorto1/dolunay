import React from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const AdminUsers = ({ _id, username, email, onDelete, onModify }) => {
  const { isAuthenticated } = useAuth();
  const handleDelete = async () => {
    try {
      // Lógica para eliminar el usuario
      if (isAuthenticated){
      const token = localStorage.getItem('token');
      const response = await fetch(`https://donulayback.onrender.com/api/users/${_id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': ` ${token}`,
        },
      });

      if (response.ok) {
        onDelete(_id);
      } else {
        console.error('Error al eliminar el usuario:', response.statusText);
      }
    }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <article className="user-card">
      <header className="Header">
        <h2 className="user-username">{username}</h2>
      </header>
      <section>
        <p className="user-email">Email: {email}</p>
      </section>
      <footer className="UserFooter">
     
        <br />
        <button className="btnDelete" onClick={handleDelete}>
          Eliminar
        </button>
      </footer>
    </article>
  );
};

export default AdminUsers;