import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Oferta = ({ id, name, img, price, stock}) => {
  return (
    <Carousel
    showArrows={true}
    showThumbs={false}
    showStatus={false}
    infiniteLoop={true}
    centerMode={false}
    centerSlidePercentage={33.33} // Espacio para tres imágenes
    emulateTouch={true} // Habilitar el desplazamiento táctil en dispositivos móviles
    dynamicHeight={false} // Establecer en true si las imágenes tienen diferentes alturas
  >
    <article className="product-card">
      <header className="Header">
        <h2 className=" product-name">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="product-image" />
      </picture>
      <section>
        <p className="product-price">
          Precio: $ {price}
        </p>
        <p className="product-stock">
          Stock: {stock}
        </p>
      </section>
      <footer className="ItemFooter">
        <Link className="btnDetail"to= {`/item/${id}`}> Ver detalle</Link> 
        
      </footer>
    </article>
    </Carousel>
  );
};

export default Oferta