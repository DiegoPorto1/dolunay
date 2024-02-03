import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ _id, title, thumbnails, price, stock }) => {
  console.log('Propiedad img en el componente Item:', thumbnails);

  return (
    <article className="product-card">
      <header className="Header">
        <h2 className="product-name">{title}</h2>
      </header>
      <div className="product-images">
        {/* Muestra solo la primera imagen */}
        {thumbnails.length > 0 && (
          <img
            src={`https://donulayback.onrender.com/${thumbnails[0].replace(/\\/g, '/')}`}
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
        <Link className="btnDetail" to={`/item/${_id}`}>
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;