import React from 'react';
import axios from 'axios';

const AdminUsers = ({ _id, username, email, onDelete, onModify }) => {
  const handleDelete = async () => {
    try {
      // Lógica para eliminar el usuario
      await axios.delete(`http://localhost:4000/api/users/${_id}`);
      onDelete(_id);
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