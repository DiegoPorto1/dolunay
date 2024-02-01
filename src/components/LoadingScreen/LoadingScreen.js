import React from 'react';
import './LoadingScreen.css'; // Importa el archivo CSS para estilizar la pantalla de carga
import luna from './luna.png'
import { useEffect } from 'react';

const LoadingScreen = () => {
  useEffect(() => {
    // Cambiar automáticamente el color cada 3 segundos (3000 milisegundos)
    const intervalId = setInterval(() => {
      document.body.style.backgroundColor = 'white'; // Cambiar a blanco
    }, 3000);

    // Limpiar el intervalo cuando el componente se desmonte para evitar errores de memoria
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='containerScreen'>
    <div className="loadingscreen">
      <div className="loader">
        <img src={luna} width="60" height="60"></img>
      </div>
    </div>
    </div>
  );
}

export default LoadingScreen;