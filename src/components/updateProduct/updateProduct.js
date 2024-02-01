import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';

const UpdateProduct = ({ history }) => {
  const { productId } = useParams();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    status: true,
    code: '',
    thumbnails: [], // Modificado para reflejar el nombre del modelo
  });
  const [successMessage, setSuccessMessage] = useState(null);
  
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log('Fetching product details for productId:', productId);
        const response = await axios.get(`http://localhost:4000/productos/${productId}`);
        console.log('Response:', response.data);

        // Asegurémonos de que los valores iniciales sean siempre definidos
        const initialProduct = {
          name: response.data.name || '',
          description: response.data.description || '',
          price: response.data.price || 0,
          stock: response.data.stock || 0,
          category: response.data.category || '',
          status: response.data.status || true,
          code: response.data.code || '',
          thumbnails: response.data.thumbnails || [],
        };

        setProduct(initialProduct);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'thumbnails') {
      // Para el campo de archivos, utiliza e.target.files
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: files ? Array.from(files) : [], // Convertir a array si hay archivos, de lo contrario, asignar un array vacío
      }));
    } else {
      // Para otros campos, usa el valor normal
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(product).forEach(([key, value]) => {
        if (key === 'thumbnails') {
          // Manejar el caso de las imágenes
          value.forEach((image) => {
            formData.append('thumbnails', image);
          });
        } else {
          formData.append(key, value);
        }
      });

      // Lógica para enviar los cambios al servidor
      await axios.put(`http://localhost:4000/productos/${productId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('¡Producto actualizado con éxito!');

      console.log('Producto actualizado con éxito');
      // Redirecciona al usuario a la página de detalles del producto actualizado
     setTimeout(() => {
        if (history && history.push) {
          history.push('http://localhost:3000/admin');
        }
      }, 1000);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };
  const handleGoToAdmin = () => {
    // Redirige al usuario a la página de administrador
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <h2>Actualizar Producto</h2>
     
      <form onSubmit={handleSubmit} encType="multipart/form-data" >
        <label>
          Nombre:
          <input type="text" name="name" value={product.name} onChange={handleChange} />
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
        <button type="submit">Actualizar Producto</button>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        
      </form>
      <Link to="/admin" onClick={handleGoToAdmin} >Volver</Link>
    </div>
  );
};

export default UpdateProduct;