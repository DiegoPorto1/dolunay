import React, { useState } from 'react';

import './uploader.css';
import { useAuth } from '../../context/AuthContext';



const Uploader = () => {
  const { isAuthenticated } = useAuth();
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    status: true,
    code: '',
    thumbnails: [], // Modificado para reflejar el nombre del modelo
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log('Archivos seleccionados:', files);

    setProduct((prevProduct) => {
      if (name === 'thumbnails') {
        //  el campo de archivos, utiliza e.target.files
        return {
          ...prevProduct,
          [name]: files ? Array.from(files) : [], // Convertir a array si hay archivos, de lo contrario, asignar un array vacío
        };
      } else {
        // Para otros campos, usa el valor normal solo si hay cambios
        return value !== prevProduct[name]
          ? {
              ...prevProduct,
              [name]: value,
            }
          : prevProduct;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(product).forEach(([key, value]) => {
        if (key === 'thumbnails') {
          value.forEach((image) => {
            formData.append('thumbnails', image);
          });
        } else {
          formData.append(key, value);
        }
      });
  
      if (isAuthenticated) {
        const token = localStorage.getItem('token');
        console.log('Token almacenado:', token);
  
        const response = await fetch('https://donulayback.onrender.com/api/products/upload', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Authorization': ` ${token}`,
          },
          body: formData,
        });
  
        if (response.ok) {
          // Restablece el formulario después de enviar
          setProduct({
            title: '',
            description: '',
            price: 0,
            stock: 0,
            category: '',
            status: true,
            code: '',
            thumbnails: [],
          });
  
          console.log('Producto enviado correctamente al backend');
        } else {
          console.error('Error al enviar el producto al backend:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error al enviar el producto al backend', error);
    }
  };

  return (
    <div className='divloader'>
      <h2>Cargar Producto</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Nombre:
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Descripción:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Categoría:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Código:
          <input
            type="text"
            name="code"
            value={product.code}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Estado:
          <select
            name="status"
            value={product.status}
            onChange={handleChange}
            required
          >
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
          </select>
        </label>
        <br />
        <label>
          Imágenes (separadas por coma):
          <input type="file" name="thumbnails" multiple onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Guardar Producto</button>
      </form>
    </div>
  );
};

export default Uploader;