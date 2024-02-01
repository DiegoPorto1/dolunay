import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css"
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const ItemDetail = ({ _id, name, thumbnails, category, description, price, stock }) => {
  console.log("Datos recibidos en ItemDetail:", {
    _id,
    name,
    thumbnails,
    category,
    description,
    price,
    stock,
  });

  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handledOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { _id, name, thumbnails, category, price };
    addItem(item, quantity);
  };

  return (
    <article className="containeritemdetail">
      <div className="bloque">
        <div className="bloque1">
          <header className="detailname">
            <h2>{name}</h2>
          </header>
          <Carousel showThumbs={false} dynamicHeight>
            {Array.isArray(thumbnails) ? (
              thumbnails.map((thumbnail, index) => (
                <div key={index}>
                  {/* Ajusta la construcción de la URL de la imagen */}
                  <img src={`http://localhost:4000/${thumbnail.replace(/\\/g, '/')}`} alt={name} />
                </div>
              ))
            ) : (
              <div>
                {/* Ajusta la construcción de la URL de la imagen */}
                <img src={`http://localhost:4000/${thumbnails.replace(/\\/g, '/')}`} alt={name} />
              </div>
            )}
          </Carousel>
        </div>

        <section className="bloque2">
          {description && <p>Descripcion: {description}</p>}
          <p>Precio: $ {price}</p>
        </section>
      </div>
      <footer>
        {quantityAdded > 0 ? (
          <div className="agregado">
            <Link to="/cart" className="Option">
              <button>Terminar compra</button>
            </Link>

            <Link to="/" className="Option">
              <button>Seguir comprando</button>
            </Link>
          </div>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handledOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;