import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../../context/AuthContext';



const AdminItem = ({ _id, title, img, price, stock, onDelete, onModify }) => {
  const { isAuthenticated } = useAuth();
  const handleDelete = async () => {
    try {
      if (isAuthenticated) {
        const token = localStorage.getItem('token');
        console.log('Token almacenado:', token);
        if (!token) {
          console.error('No se encontró el token en el almacenamiento local');
          return;
        }
        console.log('Token almacenado:', token);
        const response = await fetch(`https://donulayback.onrender.com/api/products/${_id}`, {
          method: 'DELETE',
          credentials: 'include',
          headers: {
            'Authorization': ` ${token}`, // Asegúrate de incluir "Bearer" antes del token
          },
        });

        if (response.ok) {
          // Lógica para eliminar el producto
          onDelete(_id);
        } else {
          console.error('Error al eliminar el producto:', response.statusText);
        }
      } else {
        console.error('No estás autenticado'); // Manejar caso en el que el usuario no está autenticado
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };


    return (
      <article className="product-card">
        <header className="Header">
          <h2 className="product-name">{title}</h2>
        </header>
        <div className="product-images">
          {/* Muestra solo la primera imagen */}
          {img.length > 0 && (
            <img
              src={`https://donulayback.onrender.com/${img[0].replace(/\\/g, '/')}`}
              alt={`Thumbnail 0`}
              className="product-image"
            />
          )}
        </div>
        <section>
          <p className="product-price">Precio: $ {price}</p>
          <p className="product-stock">Stock: {stock}</p>
        </section>
        <footer className="ItemFooter">
         
          <button className="btnModify" onClick={() => onModify(_id)}>
            Modificar
          </button>
          <br></br>
          <button className="btnDelete" onClick={handleDelete}>
            Eliminar
          </button>
        </footer>
      </article>
    );
  };
  
  export default AdminItem;