import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagen1 from './Joinnow.gif'
import imagen2 from './imagen2.jpg'
import imagen3 from './imagen3.jpg'
 import "./Carousel.css"; 

const ImageCarousel = () => {
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
      <div>
        <img src={imagen1} alt="Imagen 1" />
      </div>
      <div>
        <img src={imagen2} alt="Imagen 2" />
      </div>
      <div>
        <img src={imagen3} alt="Imagen 3" />
      </div>
      {/* Agrega más imágenes aquí si lo deseas */}
    </Carousel>
  );
};

export default ImageCarousel;