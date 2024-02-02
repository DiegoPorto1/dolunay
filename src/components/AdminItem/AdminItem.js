import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const AdminItem = ({ _id, title, img, price, stock, onDelete, onModify }) => {
    const handleDelete = async () => {
      try {
        // Lógica para eliminar el producto
        await axios.delete(`http://localhost:4000/api/products/${_id}`);
        onDelete(_id);
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
              src={`http://localhost:4000/${img[0].replace(/\\/g, '/')}`}
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